import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";

const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;
const VOTERS_AUDIENCE_ID = process.env.RESEND_VOTERS_AUDIENCE_ID;

export async function POST(req: Request) {
  try {
    const audiences = [AUDIENCE_ID, VOTERS_AUDIENCE_ID].filter(
      (audienceId): audienceId is string => Boolean(audienceId)
    );

    if (audiences.length === 0) {
      console.error("Unsubscribe failed: no Resend audience is configured");
      return NextResponse.json(
        { error: "Unsubscribe is temporarily unavailable" },
        { status: 503 }
      );
    }

    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    for (const audienceId of audiences) {
      try {
        await resend.contacts.remove({
          audienceId,
          email,
        });
      } catch {
        // Contact may not exist in this audience
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unsubscribe error:", err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
