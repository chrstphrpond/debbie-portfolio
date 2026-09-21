import { readFileSync } from "fs";
import { Resend } from "resend";

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

const AUDIENCE_ID = requireEnv("RESEND_AUDIENCE_ID");
const SRC = process.argv.find((arg) => arg.startsWith("--input="))?.slice("--input=".length);
if (!SRC) {
  throw new Error("Missing --input=/private/path/voters-cleaned.csv");
}
const CONCURRENCY = 1;
const DELAY_MS = 230; // ~4.3 req/s, under 5/s limit
const DRY_RUN = process.argv.includes("--dry-run");
const LIMIT_ARG = process.argv.find(a => a.startsWith("--limit="));
const LIMIT = LIMIT_ARG ? parseInt(LIMIT_ARG.split("=")[1], 10) : Infinity;

function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [], cur = "", inQ = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inQ) {
      if (ch === '"' && text[i + 1] === '"') { cur += '"'; i++; }
      else if (ch === '"') inQ = false;
      else cur += ch;
    } else {
      if (ch === '"') inQ = true;
      else if (ch === ",") { row.push(cur); cur = ""; }
      else if (ch === "\n") { row.push(cur); rows.push(row); row = []; cur = ""; }
      else if (ch === "\r") {}
      else cur += ch;
    }
  }
  if (cur.length || row.length) { row.push(cur); rows.push(row); }
  return rows.filter(r => r.some(c => c.length));
}

const API_KEY = requireEnv("RESEND_API_KEY");
const resend = new Resend(API_KEY);
const text = readFileSync(SRC, "utf8");
const rows = parseCsv(text).slice(1);

type Job = { email: string; firstName: string; lastName: string };
const jobs: Job[] = [];
for (const r of rows) {
  const fn = (r[1] || "").trim();
  const ln = (r[2] || "").trim();
  const em = (r[3] || "").trim().toLowerCase();
  if (!em || !fn) continue;
  jobs.push({ email: em, firstName: fn, lastName: ln });
  if (jobs.length >= LIMIT) break;
}

console.log(`[${DRY_RUN ? "DRY-RUN" : "LIVE"}] Updating ${jobs.length} contacts in the configured audience; concurrency=${CONCURRENCY}`);
if (DRY_RUN) {
  console.log("Input parsed successfully. Contact details are intentionally omitted from logs.");
  process.exit(0);
}

let done = 0, ok = 0, fail = 0;
const failures: string[] = [];

async function worker(slice: Job[]) {
  for (const j of slice) {
    try {
      let result = await resend.contacts.update({
        audienceId: AUDIENCE_ID,
        email: j.email,
        firstName: j.firstName,
        lastName: j.lastName,
      });

      if (result.error?.statusCode === 429) {
        await new Promise(r => setTimeout(r, 1500));
        result = await resend.contacts.update({
          audienceId: AUDIENCE_ID,
          email: j.email,
          firstName: j.firstName,
          lastName: j.lastName,
        });
      }

      if (result.error) throw new Error(result.error.message);
      ok++;
    } catch (e: any) {
      fail++;
      failures.push(e?.message || String(e));
    }
    done++;
    if (done % 200 === 0) console.log(`  ${done}/${jobs.length} (ok ${ok}, fail ${fail})`);
    await new Promise(r => setTimeout(r, DELAY_MS));
  }
}

const slices: Job[][] = Array.from({ length: CONCURRENCY }, () => []);
jobs.forEach((j, i) => slices[i % CONCURRENCY].push(j));
await Promise.all(slices.map(worker));

console.log(`\nDone. OK ${ok}, Failed ${fail}.`);
if (failures.length) console.log(`${failures.length} contact update(s) failed; recipient details were omitted.`);
