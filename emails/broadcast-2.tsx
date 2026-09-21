import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

const BLOB = "https://qe5fkls85ilcgo5l.public.blob.vercel-storage.com/email-assets";

interface BroadcastEmailProps {
  firstName?: string;
  recipientEmail?: string;
}

export default function BroadcastEmail({ firstName = "", recipientEmail = "" }: BroadcastEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Three commitments. One mission. Let me be specific.</Preview>
      <Body style={body}>
        <Container style={container}>

          {/* ── CAMPAIGN FLYER ── */}
          <Section style={{ padding: 0, margin: 0 }}>
            <Img
              src={`${BLOB}/social-post-2.jpg`}
              alt="We ARE One PNAA — Adaptive · Resilient · Empowered"
              width="560"
              style={flyer}
            />
          </Section>

          {/* ── PERSONAL LETTER ── */}
          <Section style={letter}>
            <Text style={letterEyebrow}>Campaign Platform</Text>
            <Text style={letterHeading}>Here's What I Want You to Help Me Do For the North Central Region</Text>

            {firstName && (
              <Text style={greeting}>Hi {firstName},</Text>
            )}

            <Text style={para}>
              Last week I shared why I'm running. This week, I want to be specific — because words without action are just words.
            </Text>

            <Text style={para}>
              If you give me the opportunity to serve as your North Central Region Vice President, here is exactly what I'm committed to:
            </Text>

            <Hr style={divider} />

            <Text style={platformEyebrow}>My Platform</Text>

            <Section style={areSection}>
              <Text style={areLabel}>
                <span style={{ color: "#c41230", fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", fontWeight: 800, letterSpacing: "2px" }}>A — ADAPTIVE</span>
              </Text>
              <Text style={areDesc}>
                I'll establish a regular feedback loop between chapter presidents and regional leadership — so decisions are made <em>with</em> our chapters, not <em>for</em> them. No more one-size-fits-all directives. Every chapter has different needs, and I will show up to understand yours — in any way I can.
              </Text>

              <Text style={areLabel}>
                <span style={{ color: "#c41230", fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", fontWeight: 800, letterSpacing: "2px" }}>R — RESILIENT</span>
              </Text>
              <Text style={areDesc}>
                Leadership transitions are one of our biggest vulnerabilities. I'll work to build continuity plans so no chapter is left without support during a leadership gap — because our momentum shouldn't depend on one person staying in the room.
              </Text>

              <Text style={areLabel}>
                <span style={{ color: "#c41230", fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", fontWeight: 800, letterSpacing: "2px" }}>E — EMPOWERED</span>
              </Text>
              <Text style={areDesc}>
                I've watched talented nurses sit on the sidelines because no one opened the door. As VP, I'll actively create pathways for newer members to step into leadership — and make sure Filipino-American nurses are represented and recognized at every level of PNAA.
              </Text>
            </Section>

            <Hr style={divider} />

            <Text style={para}>
              These aren't promises I'm making lightly. They come from 20 years of watching what works and what doesn't — from the chapter level all the way to the national stage.
            </Text>

            <Text style={para}>
              But here's the truth — I can't do any of this alone. Real change in the North Central Region requires more than one leader. It requires all of us. I'm asking you to be part of this: share this campaign with a fellow PNAA nurse, encourage your chapter members to stay engaged, and when the time comes — vote. Your participation is what turns a platform into action.
            </Text>

            <Text style={para}>
              Whether that means forwarding this email, showing up at a chapter meeting, or simply staying connected — every contribution matters. Together, we build the region we deserve.
            </Text>

            <Text style={para}>With love and in service,</Text>

            <Text style={signature}>
              Debbie Maquidato, BSN, RN{"\n"}
              Candidate · PNAA North Central Region Vice President{"\n"}
              PNAA 2026 Elections
            </Text>

            <Button href="https://debbieforncr.com?utm_source=email&utm_medium=campaign&utm_campaign=email2-platform" style={cta}>
              Visit the Campaign Site →
            </Button>
          </Section>

          {/* ── FOOTER ── */}
          <Section style={footer}>
            <Text style={footerText}>
              © 2026 Debbie Maquidato Campaign &nbsp;·&nbsp;{" "}
              <a href="https://debbieforncr.com" style={footerLink}>debbieforncr.com</a>
            </Text>
            <Text style={footerText}>
              9259 Deercross Pkwy Apt 1B · Blue Ash, OH 45236 · United States
            </Text>
            <Text style={footerText}>
              You received this because you are a member of the PNAA community.
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  );
}

/* ─────────────────── Styles ─────────────────── */

const body: React.CSSProperties = {
  backgroundColor: "#e8ecf0",
  fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  margin: 0,
  padding: "32px 0",
};

const container: React.CSSProperties = {
  maxWidth: "560px",
  margin: "0 auto",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 4px 32px rgba(0,0,0,0.14)",
  backgroundColor: "#ffffff",
};

const flyer: React.CSSProperties = {
  display: "block",
  width: "100%",
  maxWidth: "560px",
};

const letter: React.CSSProperties = {
  padding: "36px 40px 32px",
  backgroundColor: "#ffffff",
};

const letterEyebrow: React.CSSProperties = {
  fontFamily: "'Plus Jakarta Sans', Arial, sans-serif",
  fontSize: "10px",
  fontWeight: 700,
  letterSpacing: "3px",
  textTransform: "uppercase",
  color: "#c41230",
  margin: "0 0 10px",
};

const letterHeading: React.CSSProperties = {
  fontFamily: "Georgia, 'Times New Roman', serif",
  fontSize: "24px",
  fontWeight: 700,
  color: "#1a3563",
  lineHeight: "1.25",
  margin: "0 0 28px",
};

const para: React.CSSProperties = {
  fontFamily: "Georgia, 'Times New Roman', serif",
  fontSize: "15px",
  lineHeight: "1.85",
  color: "#374151",
  margin: "0 0 16px",
};

const greeting: React.CSSProperties = {
  fontFamily: "Georgia, 'Times New Roman', serif",
  fontSize: "15px",
  lineHeight: "1.85",
  color: "#374151",
  margin: "0 0 16px",
};

const signature: React.CSSProperties = {
  fontFamily: "'Plus Jakarta Sans', Arial, sans-serif",
  fontSize: "13px",
  lineHeight: "1.8",
  color: "#1a3563",
  fontWeight: 700,
  whiteSpace: "pre-line",
  margin: "0 0 28px",
};

const platformEyebrow: React.CSSProperties = {
  fontFamily: "'Plus Jakarta Sans', Arial, sans-serif",
  fontSize: "10px",
  fontWeight: 700,
  letterSpacing: "3px",
  textTransform: "uppercase",
  color: "#9ca3af",
  margin: "0 0 16px",
};

const areSection: React.CSSProperties = {
  margin: "0 0 8px",
};

const areLabel: React.CSSProperties = {
  fontFamily: "'Plus Jakarta Sans', Arial, sans-serif",
  fontSize: "11px",
  fontWeight: 800,
  letterSpacing: "2px",
  margin: "0 0 4px",
};

const areDesc: React.CSSProperties = {
  fontFamily: "Georgia, 'Times New Roman', serif",
  fontSize: "14px",
  lineHeight: "1.7",
  color: "#374151",
  margin: "0 0 20px",
};

const divider: React.CSSProperties = {
  borderTop: "1px solid #e8ecf0",
  margin: "0 0 24px",
};

const cta: React.CSSProperties = {
  backgroundColor: "#c41230",
  color: "#ffffff",
  fontSize: "13px",
  fontWeight: 700,
  padding: "14px 32px",
  borderRadius: "5px",
  letterSpacing: "0.5px",
  textDecoration: "none",
  display: "inline-block",
  boxSizing: "border-box",
};

const footer: React.CSSProperties = {
  backgroundColor: "#1a3563",
  padding: "18px 32px",
  textAlign: "center",
};

const footerText: React.CSSProperties = {
  fontSize: "10px",
  color: "rgba(255,255,255,0.4)",
  lineHeight: "1.7",
  margin: "0 0 2px",
};

const footerLink: React.CSSProperties = {
  color: "rgba(255,255,255,0.6)",
  textDecoration: "none",
};
