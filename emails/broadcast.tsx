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
      <Preview>20 years of service. One mission. Here's why I'm running.</Preview>
      <Body style={body}>
        <Container style={container}>

          {/* ── CAMPAIGN FLYER ── */}
          <Section style={{ padding: 0, margin: 0 }}>
            <Img
              src={`${BLOB}/social-post-1.jpg`}
              alt="Debbie Maquidato — PNAA North Central Region Vice President Candidate"
              width="560"
              style={flyer}
            />
          </Section>

          {/* ── PERSONAL LETTER ── */}
          <Section style={letter}>
            <Text style={letterEyebrow}>A personal message from Debbie</Text>
            <Text style={letterHeading}>Why I'm Running for North Central Region Vice President</Text>

            {firstName && (
              <Text style={greeting}>Hi {firstName},</Text>
            )}

            <Text style={para}>
              I want to reach out to you directly — not as a candidate, but as a fellow Filipino-American nurse who has spent the last 20 years showing up for this community.
            </Text>

            <Text style={para}>
              I've served as <strong>Chapter President during COVID</strong> — when nobody wanted the job and our chapter needed someone to hold things together. I've served as <strong>NCR Secretary</strong>, as a member of the Awards, KEWP, and 17th NCR Service Team committees, and now as <strong>PNAA Assistant Secretary</strong> at the national level. I didn't take on these roles because they looked good on paper. I took them because our community deserved someone who would actually do the work.
            </Text>

            <Text style={para}>
              That same conviction is why I'm running for <strong>PNAA North Central Region Vice President</strong> in the 2026 Elections.
            </Text>

            <Text style={para}>
              Our region has so much potential — and I believe we haven't fully unlocked it yet. I've watched talented nurses stay quiet because they didn't feel empowered to speak. I've seen chapters operate in silos when they could be lifting each other up. I want to change that.
            </Text>

            <Text style={para}>
              By day, I'm an Operating Room Nurse III at Cincinnati VA Medical Center, an SPHM Advocate, and an MSN student at Xavier University. I lead in the OR the same way I lead in PNAA — with accountability, presence, and genuine care for the people beside me.
            </Text>

            <Text style={para}>
              As your Vice President, I'll be the bridge between chapters, between members and leadership, between where we are and where we could be. I'm asking for your vote — and your trust.
            </Text>

            <Text style={para}>
              Let's build a North Central Region that is truly <em>One PNAA — United in Purpose, Diverse in Voices.</em>
            </Text>

            <Hr style={divider} />

            <Text style={platformEyebrow}>My Platform</Text>

            <Section style={areSection}>
              <Text style={areLabel}>
                <span style={{ color: "#c41230", fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", fontWeight: 800, letterSpacing: "2px" }}>A — ADAPTIVE</span>
              </Text>
              <Text style={areDesc}>Responsive leadership that meets our chapters where they are and evolves with the needs of our members.</Text>

              <Text style={areLabel}>
                <span style={{ color: "#c41230", fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", fontWeight: 800, letterSpacing: "2px" }}>R — RESILIENT</span>
              </Text>
              <Text style={areDesc}>Built to lead through challenge and change — sustaining momentum even in the most difficult seasons.</Text>

              <Text style={areLabel}>
                <span style={{ color: "#c41230", fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", fontWeight: 800, letterSpacing: "2px" }}>E — EMPOWERED</span>
              </Text>
              <Text style={areDesc}>Elevating Filipino-American nurses into leadership and making sure every member's voice shapes our direction.</Text>
            </Section>

            <Hr style={divider} />

            <Text style={para}>With love and in service,</Text>

            <Text style={signature}>
              Debbie Maquidato, BSN, RN{"\n"}
              Candidate · PNAA North Central Region Vice President{"\n"}
              PNAA 2026 Elections
            </Text>

            <Button href="https://debbieforncr.com?utm_source=email&utm_medium=campaign&utm_campaign=email1-why-im-running" style={cta}>
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
