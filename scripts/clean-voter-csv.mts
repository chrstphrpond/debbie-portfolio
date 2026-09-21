import { readFileSync, writeFileSync } from "fs";

function getArg(name: string): string | undefined {
  const prefix = `--${name}=`;
  return process.argv.find((arg) => arg.startsWith(prefix))?.slice(prefix.length);
}

const SRC = getArg("input");
const OUT = getArg("output");

if (!SRC || !OUT) {
  console.error("Usage: tsx scripts/clean-voter-csv.mts --input=/private/path/voters.csv --output=/private/path/voters-cleaned.csv");
  process.exit(1);
}

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
      else if (ch === "\r") { /* skip */ }
      else cur += ch;
    }
  }
  if (cur.length || row.length) { row.push(cur); rows.push(row); }
  return rows.filter(r => r.some(c => c.length));
}

function titleCase(s: string): string {
  return s
    .toLowerCase()
    .split(/(\s+|-)/)
    .map(part => {
      if (/^\s+|-$/.test(part)) return part;
      // Handle O'Donnell, D'Souza
      return part.replace(/\b([a-zà-ÿ])/g, m => m.toUpperCase())
        .replace(/(['’])([a-zà-ÿ])/g, (_, q, c) => q + c.toUpperCase());
    })
    .join("");
}

function cleanName(raw: string): string {
  let s = (raw || "").trim();
  // Remove parenthetical nicknames: "Olympia (Gen)" -> "Olympia"
  s = s.replace(/\s*\([^)]*\)/g, "");
  // Remove quoted nicknames: 'Maria Crisanta "Cris"' or smart quotes
  s = s.replace(/\s*["“”][^"“”]*["“”]/g, "");
  // Strip trailing digits attached to names: "O'Donnell1960" -> "O'Donnell"
  s = s.replace(/\d+$/g, "");
  s = s.replace(/\s+/g, " ").trim();
  // If fully upper or fully lower, title-case it. Mixed-case left alone.
  const hasUpper = /[A-Z]/.test(s);
  const hasLower = /[a-z]/.test(s);
  if ((hasUpper && !hasLower) || (!hasUpper && hasLower)) s = titleCase(s);
  return s;
}

function csvEscape(s: string): string {
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

const text = readFileSync(SRC, "utf8");
const rows = parseCsv(text);
const header = rows[0];
const data = rows.slice(1);

const cleaned: string[][] = [header];
const changes = { firstName: 0, lastName: 0, email: 0 };
for (const r of data) {
  const out = [...r];
  const newFirst = cleanName(r[1]);
  const newLast = cleanName(r[2]);
  const newEmail = (r[3] || "").trim().toLowerCase();
  if (newFirst !== r[1]) changes.firstName++;
  if (newLast !== r[2]) changes.lastName++;
  if (newEmail !== r[3]) changes.email++;
  out[1] = newFirst;
  out[2] = newLast;
  out[3] = newEmail;
  cleaned.push(out);
}

writeFileSync(OUT, cleaned.map(r => r.map(csvEscape).join(",")).join("\n"));
console.log(`Cleaned ${data.length} rows → ${OUT}`);
console.log(`Changes — first: ${changes.firstName}, last: ${changes.lastName}, email: ${changes.email}`);
