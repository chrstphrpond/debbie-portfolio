@AGENTS.md

# CLAUDE.md — Debbie Maquidato Portfolio

## Project Overview

Mobile-first QR landing page / portfolio site for **Debbie Maquidato, BSN, RN** — a Philippine-American nursing leader running for PNAA North Central Region Vice President in the PNAA 2026 Elections.

The site functions as a scannable digital presence: someone scans her QR code at a conference and immediately understands her leadership depth, clinical role, and community involvement.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + CSS variables |
| UI Primitives | shadcn/ui |
| Icons | Lucide React |
| Page animations | GSAP + ScrollTrigger |
| Component motion | Motion.dev (v11) |
| Fonts | Plus Jakarta Sans (UI) + Instrument Serif (display) |
| Email | Resend + React Email |
| Monitoring | Sentry |
| Deployment | Vercel |

## Commands

```bash
npm run dev       # start dev server at localhost:3000
npm run build     # production build
npm run lint      # ESLint
```

## Project Structure

```
app/
  layout.tsx              # font imports, metadata, OG tags
  page.tsx                # section composition (server component)
  globals.css             # CSS variables, Tailwind base overrides
  global-error.tsx        # Sentry global error boundary
  opengraph-image.tsx     # dynamic OG image generation
  favicon.ico             # site favicon
  api/
    email/subscribe/route.ts  # Resend signup + welcome email API

components/
  Hero.tsx                # photo, name, title, tagline — GSAP word stagger on load
  LeadershipTimeline.tsx  # vertical timeline — GSAP ScrollTrigger line draw
  ClinicalSection.tsx     # badge/pill layout with Lucide icons
  ClinicalHighlights.tsx  # clinical role highlights
  AcademicSection.tsx     # minimal single card
  CommunitySection.tsx    # Asianati + multicultural section
  LinksSection.tsx        # Motion.dev shimmer pill buttons
  OnePNAABadge.tsx        # SVG circular badge (brand mark)
  ClosingQuote.tsx        # serif closing quote, GSAP fade-up
  Endorsements.tsx        # endorsement quotes
  Footer.tsx              # campaign footer with logos
  Navbar.tsx              # sticky top nav
  ImpactNumbers.tsx       # stats/numbers section
  PhotoStrip.tsx          # photo gallery strip
  PlatformPillars.tsx     # Adaptive · Resilient · Empowered
  ThreeDimensions.tsx     # three dimensions of leadership
  ScrollToTop.tsx         # scroll-to-top button
  EmailSignup.tsx         # email signup form (Resend audience)

emails/
  welcome.tsx             # auto-sent on signup
  campaign-update.tsx     # weekly campaign news template
  event-invite.tsx        # event announcement template

lib/
  resend.ts               # Resend client initialization

public/
  favicon/                # full favicon set (apple-touch, webmanifest)
  photos/                 # campaign headshots and photos
  initials-logo-2.svg     # DM initials logo
```

## Design Rules

- **Never use Inter** — use Plus Jakarta Sans for all UI text
- **Never use gold** — the palette is navy + crimson (from the client's actual flyer)
- Section headers use Instrument Serif, body uses Plus Jakarta Sans
- Background is ice-blue-to-white gradient, not flat white or cream
- The leadership timeline is the hero moment of the page — treat it with care
- All animations must degrade gracefully when JS is disabled (CSS fallback classes)
- Max content width: `480px` centered (mobile-first QR page)

## Content Source

See `brief-summary.txt` and `spec.md` for all content, links, and copy.

## Email / Resend Integration

- Resend MCP server configured globally for CLI access
- Signup form captures supporters into a Resend audience
- Welcome email auto-sends on signup
- Campaign team sends broadcasts via Resend dashboard
- Templates use campaign branding (navy + crimson, Plus Jakarta Sans)
- See plan: `effervescent-napping-lamport.md` for full implementation details

## Client Context

- Debbie is running for **PNAA North Central Region Vice President** (2026 Elections)
- Campaign tagline: **"One PNAA — United in Purpose, Diverse in Voices"**
- Platform: **Adaptive · Resilient · Empowered**
- The site must work perfectly on mobile (QR scan → phone browser)
- Real photo will replace the placeholder — circular frame with navy double-ring border

## Photos

Campaign headshots are in `public/photos/headshots/`. The hero uses the formal headshot with a circular frame and navy double-ring border.
