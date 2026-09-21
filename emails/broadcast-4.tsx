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
      <Preview>The election is here. Your vote shapes our region's future.</Preview>
      <Body style={body}>
        <Container style={container}>

          {/* ── HERO IMAGE ── */}
          <Section style={{ padding: 0, margin: 0 }}>
            <Img
              src={`${BLOB}/email-header-4.jpg`}
              alt="Debbie Maquidato — Vote for NCR Vice President"
              width="560"
              style={flyer}
            />
          </Section>

          {/* ── PERSONAL LETTER ── */}
          <Section style={letter}>
            <Text style={letterEyebrow}>PNAA 2026 Elections</Text>
            <Text style={letterHeading}>This Is Our Moment — Please Vote</Text>

            {firstName && (
              <Text style={greeting}>Hi {firstName},</Text>
            )}

            <Text style={para}>
              Over the past few weeks, I've shared my heart with you — why I'm running, what I stand for, and the kind of leadership I believe our North Central Region deserves. Today, I'm writing to you one last time before the election.
            </Text>

            <Text style={para}>
              <strong>Your vote matters.</strong> Not just to me — but to every nurse in our region who wants to feel seen, heard, and supported. Every vote is a statement about the kind of PNAA we want to build together.
            </Text>

            <Text style={para}>
              I've spent 20 years in service to this community — through COVID, through leadership transitions, through the quiet seasons when nobody was watching. I didn't do it for recognition. I did it because <strong>this community changed my life</strong>, and I want to give back everything I can.
            </Text>

            <Hr style={divider} />

            <Text style={platformEyebrow}>A Quick Look Back</Text>

            <Section style={areSection}>
              <Text style={areLabel}>
                <span style={{ color: "#c41230", fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", fontWeight: 800, letterSpacing: "2px" }}>WEEK 1</span>
              </Text>
              <Text style={areDesc}>I shared my story — 20 years of service, from chapter president during COVID to PNAA Assistant Secretary. This campaign is built on a lifetime of showing up.</Text>

              <Text style={areLabel}>
                <span style={{ color: "#c41230", fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", fontWeight: 800, letterSpacing: "2px" }}>WEEK 2</span>
              </Text>
              <Text style={areDesc}>I laid out my platform — Adaptive, Resilient, Empowered. Real commitments with real actions, and I asked for your help making them happen.</Text>

              <Text style={areLabel}>
                <span style={{ color: "#c41230", fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", fontWeight: 800, letterSpacing: "2px" }}>WEEK 3</span>
              </Text>
              <Text style={areDesc}>I talked about community — how the people who believed in me shaped the leader I've become, and why I'll never lead from the top down.</Text>
            </Section>

            <Hr style={divider} />

            <Text style={para}>
              Now it's in your hands.
            </Text>

            <Text style={paraHighlight}>
              When you cast your vote, you're choosing the future of our region. I'm asking you to choose a leader who will <strong>show up</strong>, who will <strong>listen</strong>, and who will work tirelessly to make our North Central Region the strongest it's ever been.
            </Text>

            <Text style={para}>
              No matter the outcome, I want you to know — it has been the greatest honor of my career to serve this community. And I will continue to serve, in every way I can, for as long as you'll have me.
            </Text>

            <Text style={para}>
              <em>One PNAA — United in Purpose, Diverse in Voices.</em>
            </Text>

            <Text style={para}>With love, gratitude, and hope,</Text>

            <Text style={signature}>
              Debbie Maquidato, BSN, RN{"\n"}
              Candidate · PNAA North Central Region Vice President{"\n"}
              PNAA 2026 Elections
            </Text>

            <Button href="https://debbieforncr.com?utm_source=email&utm_medium=campaign&utm_campaign=email4-vote" style={cta}>
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

const paraHighlight: React.CSSProperties = {
  fontFamily: "Georgia, 'Times New Roman', serif",
  fontSize: "16px",
  lineHeight: "1.85",
  color: "#1a3563",
  margin: "0 0 16px",
  fontWeight: 600,
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
  margin: "0 0 16px",
  paddingLeft: "0",
};

const divider: React.CSSProperties = {
  borderTop: "1px solid #e8ecf0",
  margin: "0 0 28px",
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
