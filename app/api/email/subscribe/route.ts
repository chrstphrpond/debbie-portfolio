import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";
import WelcomeEmail from "@/emails/welcome";

const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

export async function POST(req: Request) {
  try {
    const { email, firstName } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Add contact to Resend audience (best-effort, don't block email)
    if (AUDIENCE_ID) {
      try {
        await resend.contacts.create({
          audienceId: AUDIENCE_ID,
          email,
          firstName,
        });
      } catch (contactErr) {
        console.error("Failed to add contact (non-blocking):", contactErr);
      }
    }

    // Send welcome email
    const { error } = await resend.emails.send({
      from: "Debbie Maquidato, BSN RN <debbie@debbieforncr.com>",
      to: email,
      subject: "Welcome to the One PNAA Campaign!",
      react: WelcomeEmail({ firstName: firstName || "there", recipientEmail: email }),
      headers: {
        "List-Unsubscribe": `<https://debbieforncr.com/unsubscribe?email=${encodeURIComponent(email)}>`,
        "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
      },
    });

    if (error) {
      console.error("Failed to send welcome email:", JSON.stringify(error));
      return NextResponse.json(
        { error: `Failed to send welcome email: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Subscribe error:", err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
