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
      <Preview>Leadership isn't a title — it's the people who stand with you.</Preview>
      <Body style={body}>
        <Container style={container}>

          {/* ── HERO IMAGE ── */}
          <Section style={{ padding: 0, margin: 0 }}>
            <Img
              src={`${BLOB}/email-header-3.jpg`}
              alt="Debbie Maquidato — Community & Leadership"
              width="560"
              style={flyer}
            />
          </Section>

          {/* ── PERSONAL LETTER ── */}
          <Section style={letter}>
            <Text style={letterEyebrow}>Community & Leadership</Text>
            <Text style={letterHeading}>I Didn't Get Here Alone — And I Won't Lead Alone Either</Text>

            {firstName && (
              <Text style={greeting}>Hi {firstName},</Text>
            )}

            <Text style={para}>
              Over the past two weeks, I've shared why I'm running and what I plan to do for the North Central Region. This week, I want to talk about something just as important — the people who shaped me into the leader I am today.
            </Text>

            <Text style={para}>
              Every role I've held in PNAA — <strong>Chapter President</strong>, <strong>Circle of Presidents Regional Representative</strong>, <strong>NCR Secretary</strong>, and <strong>PNAA Assistant Secretary</strong> — was made possible because someone believed in me before I fully believed in myself. A mentor who pushed me to step up. A fellow nurse who stayed late to help me figure things out. A chapter member who said, <em>"We need your voice at the table."</em>
            </Text>

            <Text style={para}>
              That's why my leadership style will never be top-down. I believe in <strong>walking alongside</strong> the people I serve — not ahead of them. Whenever I get the chance to visit chapters, I prefer to come without a script. I arrive with an open mind, ready to listen and learn about what's working well, what might need improvement, and the things that keep you awake at night.
            </Text>

            <Text style={para}>
              In my clinical work, I've learned that the best patient outcomes happen when the entire team communicates openly. The same is true for PNAA. Our region is strongest when <strong>every chapter has a seat at the table</strong> — not just the loudest or the largest.
            </Text>

            <Hr style={divider} />

            <Text style={platformEyebrow}>What Community Means to Me</Text>

            <Section style={areSection}>
              <Text style={areLabel}>
                <span style={{ color: "#c41230", fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", fontWeight: 800, letterSpacing: "2px" }}>SHOWING UP</span>
              </Text>
              <Text style={areDesc}>I served as Chapter President during COVID — not because it was convenient, but because our community needed someone present. I'll bring that same commitment to every chapter in NCR.</Text>

              <Text style={areLabel}>
                <span style={{ color: "#c41230", fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", fontWeight: 800, letterSpacing: "2px" }}>LIFTING OTHERS</span>
              </Text>
              <Text style={areDesc}>I've mentored emerging nurse leaders and advocated for Filipino-American representation at every level. As VP, I'll create pathways for the next generation to lead.</Text>

              <Text style={areLabel}>
                <span style={{ color: "#c41230", fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", fontWeight: 800, letterSpacing: "2px" }}>BRIDGING GAPS</span>
              </Text>
              <Text style={areDesc}>Our chapters shouldn't operate in silos. I'll foster cross-chapter collaboration so we learn from each other's strengths and support each other's challenges.</Text>
            </Section>

            <Hr style={divider} />

            <Text style={para}>
              I'm not running to add a title to my name. I'm running because I've seen what our community can do when we work together — and I know we're capable of so much more.
            </Text>

            <Text style={para}>
              If my story resonates with you, I'd be honored to have your support. Share this email with a colleague. Talk about it at your next chapter meeting. And when the time comes — <strong>vote for the kind of leadership that shows up.</strong>
            </Text>

            <Text style={para}>With love and in service,</Text>

            <Text style={signature}>
              Debbie Maquidato, BSN, RN{"\n"}
              Candidate · PNAA North Central Region Vice President{"\n"}
              PNAA 2026 Elections
            </Text>

            <Button href="https://debbieforncr.com?utm_source=email&utm_medium=campaign&utm_campaign=email3-community" style={cta}>
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
