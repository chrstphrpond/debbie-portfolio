import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface EventInviteProps {
  eventName?: string;
  eventDate?: string;
  eventLocation?: string;
  eventDescription?: string;
  rsvpUrl?: string;
}

export default function EventInvite({
  eventName = "PNAA National Convention",
  eventDate = "April 2026",
  eventLocation = "Convention Center",
  eventDescription = "Join us for an important gathering of nursing professionals from across the nation.",
  rsvpUrl,
}: EventInviteProps) {
  return (
    <Html>
      <Head />
      <Preview>You&apos;re invited: {eventName}</Preview>
      <Body style={body}>
        <Container style={container}>
          {/* Header band */}
          <Section style={headerBand}>
            <Text style={headerText}>ONE PNAA</Text>
            <Text style={headerSub}>EVENT INVITATION</Text>
          </Section>

          <Section style={content}>
            <Heading style={heading}>
              You&apos;re Invited
            </Heading>

            {/* Event details card */}
            <Section style={eventCard}>
              <Text style={eventTitle}>{eventName}</Text>
              <Text style={eventDetail}>📅 {eventDate}</Text>
              <Text style={eventDetail}>📍 {eventLocation}</Text>
            </Section>

            <Text style={paragraph}>{eventDescription}</Text>

            {rsvpUrl && (
              <Section style={ctaContainer}>
                <Link href={rsvpUrl} style={ctaButton}>
                  RSVP Now
                </Link>
              </Section>
            )}

            <Hr style={divider} />

            <Text style={paragraph}>
              Let&apos;s show our strength as a united community.
              I hope to see you there!
            </Text>

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

const headerSub: React.CSSProperties = {
  color: "#c41230",
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "2px",
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
  margin: "0 0 20px",
};

const eventCard: React.CSSProperties = {
  backgroundColor: "#f4f8fc",
  border: "1px solid #e2e8f0",
  borderRadius: "12px",
  padding: "20px 24px",
  margin: "0 0 20px",
};

const eventTitle: React.CSSProperties = {
  color: "#1a3563",
  fontSize: "18px",
  fontWeight: 700,
  margin: "0 0 12px",
};

const eventDetail: React.CSSProperties = {
  color: "#4a5568",
  fontSize: "14px",
  margin: "0 0 4px",
  lineHeight: "1.5",
};

const paragraph: React.CSSProperties = {
  color: "#4a5568",
  fontSize: "15px",
  lineHeight: "1.6",
  margin: "0 0 16px",
};

const ctaContainer: React.CSSProperties = {
  textAlign: "center" as const,
  margin: "24px 0",
};

const ctaButton: React.CSSProperties = {
  backgroundColor: "#c41230",
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: 700,
  letterSpacing: "1px",
  textTransform: "uppercase" as const,
  textDecoration: "none",
  padding: "14px 32px",
  borderRadius: "8px",
  display: "inline-block",
};

const divider: React.CSSProperties = {
  borderTop: "2px solid #c41230",
  margin: "24px 0",
  width: "48px",
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
