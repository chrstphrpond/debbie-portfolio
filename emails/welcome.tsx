import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

const BLOB = "https://qe5fkls85ilcgo5l.public.blob.vercel-storage.com/email-assets";

interface WelcomeEmailProps {
  firstName?: string;
  recipientEmail?: string;
}

export default function WelcomeEmail({ firstName = "", recipientEmail = "" }: WelcomeEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Thank you for joining — a personal note from Debbie Maquidato, BSN, RN</Preview>
      <Body style={body}>
        <Container style={container}>

          {/* Top crimson stripe */}
          <Section style={accentBar} />

          {/* Hero photo */}
          <Section style={heroSection}>
            <Img
              src={`${BLOB}/og-headshot.png`}
              alt="Debbie Maquidato, BSN, RN — Candidate, PNAA North Central Region Vice President"
              width="560"
              style={heroImg}
            />
          </Section>

          {/* Navy caption band */}
          <Section style={captionBand}>
            <Heading style={captionHeading}>Welcome. It means the world.</Heading>
            <Text style={captionSub}>One PNAA — United in Purpose, Diverse in Voices</Text>
          </Section>

          {/* Body */}
          <Section style={content}>
            <Text style={eyebrow}>A personal note from Debbie</Text>

            <Text style={paragraph}>
              I saw your name come through — and I just want to say, thank you. Genuinely.
            </Text>

            <Text style={paragraph}>
              Running for <strong style={{ color: "#1a3563" }}>PNAA North Central Region Vice President</strong> is one of the most meaningful things I've done in my 20 years of service to this community. And knowing that you're following along makes it feel even more real.
            </Text>

            <Text style={paragraph}>
              Over the coming weeks, I'll be sharing updates about the campaign, my platform, and what I believe our region can become together. You'll be the first to know.
            </Text>

            {/* Pull quote */}
            <Section style={pullQuote}>
              <Text style={pullQuoteText}>
                &ldquo;Leadership is not about having the loudest voice — it is making space for every member to be heard.&rdquo;
              </Text>
              <Text style={pullQuoteAttrib}>&mdash; Debbie Maquidato, BSN, RN</Text>
            </Section>

            {/* Platform */}
            <Text style={platformLabel}>My Platform</Text>

            <Section style={areSection}>
              <Text style={areLabel}>
                <span style={{ color: "#c41230", fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", fontWeight: 800, letterSpacing: "2px" }}>A — ADAPTIVE</span>
              </Text>
              <Text style={areDesc}>Responsive leadership that meets our chapters where they are.</Text>

              <Text style={areLabel}>
                <span style={{ color: "#c41230", fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", fontWeight: 800, letterSpacing: "2px" }}>R — RESILIENT</span>
              </Text>
              <Text style={areDesc}>Built to lead through challenge and change.</Text>

              <Text style={areLabel}>
                <span style={{ color: "#c41230", fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", fontWeight: 800, letterSpacing: "2px" }}>E — EMPOWERED</span>
              </Text>
              <Text style={areDesc}>Elevating Filipino-American nurses into leadership at every level.</Text>
            </Section>

            <Hr style={divider} />

            <Text style={paragraph}>With love and in service,</Text>

            <Text style={signature}>
              Debbie Maquidato, BSN, RN{"\n"}
              Candidate · PNAA North Central Region Vice President{"\n"}
              PNAA 2026 Elections
            </Text>

            <Button href="https://debbieforncr.com" style={ctaButton}>
              Visit the Campaign Site →
            </Button>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Hr style={footerDivider} />
            <Text style={footerText}>
              &copy; 2026 Debbie Maquidato Campaign &nbsp;&middot;&nbsp;{" "}
              <a href="https://debbieforncr.com" style={footerLink}>debbieforncr.com</a>
            </Text>
            <Text style={footerText}>
              9259 Deercross Pkwy Apt 1B · Blue Ash, OH 45236 · United States
            </Text>
            <Text style={footerText}>
              You received this because you signed up at our campaign page.
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  );
}

/* ── Styles ── */

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

const accentBar: React.CSSProperties = {
  backgroundColor: "#c41230",
  height: "4px",
  lineHeight: "4px",
  fontSize: "0",
};

const heroSection: React.CSSProperties = {
  padding: "0",
  lineHeight: "0",
  fontSize: "0",
};

const heroImg: React.CSSProperties = {
  width: "100%",
  maxWidth: "560px",
  height: "auto",
  display: "block",
};

const captionBand: React.CSSProperties = {
  backgroundColor: "#1a3563",
  padding: "28px 36px 26px",
};

const captionHeading: React.CSSProperties = {
  fontFamily: "Georgia, 'Times New Roman', serif",
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: 700,
  lineHeight: "1.2",
  margin: "0 0 8px",
};

const captionSub: React.CSSProperties = {
  fontFamily: "'Plus Jakarta Sans', Arial, sans-serif",
  color: "rgba(255,255,255,0.55)",
  fontSize: "10px",
  fontWeight: 700,
  letterSpacing: "2px",
  textTransform: "uppercase",
  margin: 0,
};

const content: React.CSSProperties = {
  backgroundColor: "#ffffff",
  padding: "36px 40px 32px",
};

const eyebrow: React.CSSProperties = {
  fontFamily: "'Plus Jakarta Sans', Arial, sans-serif",
  fontSize: "10px",
  fontWeight: 700,
  letterSpacing: "3px",
  textTransform: "uppercase",
  color: "#c41230",
  margin: "0 0 16px",
};

const paragraph: React.CSSProperties = {
  fontFamily: "Georgia, 'Times New Roman', serif",
  color: "#374151",
  fontSize: "15px",
  lineHeight: "1.85",
  margin: "0 0 16px",
};

const pullQuote: React.CSSProperties = {
  borderLeft: "3px solid #c41230",
  paddingLeft: "20px",
  margin: "4px 0 28px",
};

const pullQuoteText: React.CSSProperties = {
  fontFamily: "Georgia, 'Times New Roman', serif",
  color: "#1a3563",
  fontSize: "15px",
  fontStyle: "italic",
  lineHeight: "1.6",
  margin: "0 0 8px",
};

const pullQuoteAttrib: React.CSSProperties = {
  fontFamily: "'Plus Jakarta Sans', Arial, sans-serif",
  color: "#9ca3af",
  fontSize: "11px",
  fontWeight: 600,
  margin: 0,
};

const platformLabel: React.CSSProperties = {
  fontFamily: "'Plus Jakarta Sans', Arial, sans-serif",
  color: "#9ca3af",
  fontSize: "10px",
  fontWeight: 700,
  letterSpacing: "3px",
  textTransform: "uppercase",
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
};

const divider: React.CSSProperties = {
  borderTop: "1px solid #e8ecf0",
  margin: "8px 0 24px",
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

const ctaButton: React.CSSProperties = {
  backgroundColor: "#c41230",
  color: "#ffffff",
  fontSize: "13px",
  fontWeight: 700,
  padding: "14px 32px",
  borderRadius: "5px",
  textDecoration: "none",
  display: "inline-block",
  boxSizing: "border-box",
  letterSpacing: "0.5px",
};

const footer: React.CSSProperties = {
  backgroundColor: "#1a3563",
  padding: "20px 32px",
  textAlign: "center",
};

const footerDivider: React.CSSProperties = {
  borderTop: "1px solid rgba(255,255,255,0.1)",
  margin: "0 0 14px",
};

const footerText: React.CSSProperties = {
  fontFamily: "'Plus Jakarta Sans', Arial, sans-serif",
  color: "rgba(255,255,255,0.4)",
  fontSize: "10px",
  lineHeight: "1.7",
  margin: "0 0 2px",
  textAlign: "center",
};

const footerLink: React.CSSProperties = {
  color: "rgba(255,255,255,0.6)",
  textDecoration: "none",
};
