import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface CampaignUpdateProps {
  previewText?: string;
  headline?: string;
  bodyContent?: string;
  closingNote?: string;
  date?: string;
}

export default function CampaignUpdate({
  previewText = "This week's campaign update from Debbie Maquidato",
  headline = "Campaign Update",
  bodyContent = "Here's what's been happening on the campaign trail this week.",
  closingNote = "Thank you for your continued support. Together, we are One PNAA.",
  date = "March 2026",
}: CampaignUpdateProps) {
  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={body}>
        <Container style={container}>
          {/* Header band */}
          <Section style={headerBand}>
            <Text style={headerText}>ONE PNAA</Text>
            <Text style={dateText}>{date}</Text>
          </Section>

          <Section style={content}>
            <Heading style={heading}>{headline}</Heading>

            <Text style={paragraph}>{bodyContent}</Text>

            <Hr style={divider} />

            <Text style={paragraph}>{closingNote}</Text>

            <Section style={pillarsBox}>
              <Text style={pillarsText}>
                Adaptive · Resilient · Empowered
              </Text>
            </Section>

            <Text style={signature}>
              — Debbie Maquidato, BSN, RN
              <br />
              Candidate for PNAA NC Region Vice President
            </Text>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              © 2026 Debbie Maquidato Campaign. You received this because you
              subscribed to campaign updates.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

/* ── Styles ── */

const body: React.CSSProperties = {
  backgroundColor: "#f4f8fc",
  fontFamily:
    "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  margin: 0,
  padding: 0,
};

const container: React.CSSProperties = {
  maxWidth: "520px",
  margin: "0 auto",
};

const headerBand: React.CSSProperties = {
  backgroundColor: "#1a3563",
  padding: "24px 32px",
  borderRadius: "12px 12px 0 0",
  textAlign: "center" as const,
};

const headerText: React.CSSProperties = {
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: 700,
  letterSpacing: "3px",
  textTransform: "uppercase" as const,
  margin: "0 0 4px",
};

const dateText: React.CSSProperties = {
  color: "rgba(255,255,255,0.6)",
  fontSize: "12px",
  margin: 0,
};

const content: React.CSSProperties = {
  backgroundColor: "#ffffff",
  padding: "32px",
};

const heading: React.CSSProperties = {
  color: "#1a3563",
  fontSize: "26px",
  fontWeight: 700,
  lineHeight: "1.3",
  margin: "0 0 16px",
};

const paragraph: React.CSSProperties = {
  color: "#4a5568",
  fontSize: "15px",
  lineHeight: "1.6",
  margin: "0 0 16px",
};

const divider: React.CSSProperties = {
  borderTop: "2px solid #c41230",
  margin: "24px 0",
  width: "48px",
};

const pillarsBox: React.CSSProperties = {
  backgroundColor: "#f4f8fc",
  borderLeft: "3px solid #c41230",
  padding: "12px 16px",
  margin: "0 0 24px",
  borderRadius: "0 8px 8px 0",
};

const pillarsText: React.CSSProperties = {
  color: "#1a3563",
  fontSize: "14px",
  fontWeight: 700,
  margin: 0,
};

const signature: React.CSSProperties = {
  color: "#1a3563",
  fontSize: "14px",
  fontWeight: 600,
  lineHeight: "1.5",
  margin: "0",
};

const footer: React.CSSProperties = {
  backgroundColor: "#1a3563",
  padding: "16px 32px",
  borderRadius: "0 0 12px 12px",
};

const footerText: React.CSSProperties = {
  color: "rgba(255,255,255,0.6)",
  fontSize: "11px",
  lineHeight: "1.5",
  margin: 0,
  textAlign: "center" as const,
};
