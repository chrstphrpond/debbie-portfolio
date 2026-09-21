import { Resend } from "resend";
import { render } from "@react-email/components";
import React from "react";
import * as BroadcastModule from "../emails/broadcast-3.tsx";
const BroadcastEmail: any =
  (BroadcastModule as any).default?.default ?? (BroadcastModule as any).default ?? BroadcastModule;

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

const SEGMENT_ID = requireEnv("RESEND_CAMPAIGN_SEGMENT_ID");
const FROM = "Debbie Maquidato <debbie@debbieforncr.com>";
const SUBJECT = "I Didn't Get Here Alone — And I Won't Lead Alone Either";
const REPLY_TO = "debbie@debbieforncr.com";
const DRY_RUN = process.argv.includes("--dry-run");
const LIMIT_TO = process.argv.find((a) => a.startsWith("--limit="));
const limitTo = LIMIT_TO ? parseInt(LIMIT_TO.split("=")[1], 10) : Infinity;

const resend = new Resend(requireEnv("RESEND_API_KEY"));

type Contact = { id: string; email: string; first_name?: string | null; unsubscribed?: boolean };

async function fetchAllContacts(): Promise<Contact[]> {
  const all: Contact[] = [];
  let after: string | undefined;
  while (true) {
    const res: any = await (resend.contacts as any).list({
      audienceId: SEGMENT_ID, // SDK uses audienceId param even for segment in some versions
      segmentId: SEGMENT_ID,
      limit: 100,
      after,
    });
    const data = res?.data?.data ?? res?.data ?? [];
    if (!Array.isArray(data) || data.length === 0) break;
    all.push(...data);
    if (data.length < 100) break;
    after = data[data.length - 1].id;
    if (all.length >= limitTo) break;
  }
  return all.slice(0, limitTo);
}

function chunk<T>(arr: T[], n: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += n) out.push(arr.slice(i, i + n));
  return out;
}

async function main() {
  console.log(`[${DRY_RUN ? "DRY-RUN" : "LIVE"}] Fetching contacts from the configured segment…`);
  const contacts = await fetchAllContacts();
  const eligible = contacts.filter((c) => c.email && !c.unsubscribed);
  console.log(`Fetched ${contacts.length} contacts, ${eligible.length} eligible.`);

  if (DRY_RUN) {
    console.log("Audience check complete. Contact details are intentionally omitted from logs.");
    return;
  }

  const batches = chunk(eligible, 100);
  console.log(`Sending ${eligible.length} emails in ${batches.length} batches of up to 100.`);

  let sent = 0;
  let failed = 0;
  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];
    const payload = await Promise.all(
      batch.map(async (c) => {
        const firstName = (c.first_name || "").trim();
        const html = await render(
          React.createElement(BroadcastEmail as any, { firstName, recipientEmail: c.email })
        );
        return {
          from: FROM,
          to: [c.email],
          subject: SUBJECT,
          html,
          reply_to: REPLY_TO,
          headers: { "List-Unsubscribe": `<mailto:${REPLY_TO}?subject=unsubscribe>` },
          tags: [{ name: "campaign", value: "email3-community" }],
        };
      })
    );
    try {
      const res: any = await resend.batch.send(payload as any);
      const okCount = res?.data?.data?.length ?? batch.length;
      sent += okCount;
      console.log(`  Batch ${i + 1}/${batches.length}: ${okCount} sent`);
    } catch (e: any) {
      failed += batch.length;
      console.error(`  Batch ${i + 1}/${batches.length} FAILED:`, e?.message || e);
    }
    // Throttle: Resend allows ~10 req/s; one batch = 1 req. Tiny pause between batches.
    await new Promise((r) => setTimeout(r, 250));
  }
  console.log(`\nDone. Sent ${sent}, Failed ${failed}.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
