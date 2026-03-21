# design-system.md — Debbie Maquidato Portfolio

Derived from the client's actual social media campaign flyer (navy + crimson, script accent, circular photos, campaign poster energy).

---

## Color Palette

```css
/* Primary */
--navy:           #1a3563;   /* main text, headings, borders */
--navy-light:     #2a5298;   /* secondary navy, hover states */
--crimson:        #c41230;   /* accent, timeline, name gradient end */
--crimson-light:  #e8244a;   /* hover states on crimson elements */

/* Backgrounds */
--ice-blue:       #c5e8f2;   /* hero background start (gradient) */
--ice-blue-mid:   #e8f4f9;   /* mid gradient stop */
--white:          #ffffff;   /* page base */
--surface:        #f4f8fc;   /* section alternate background */

/* Functional */
--teal-badge:     #1a7a8a;   /* "We ARE One PNAA" badge background */
--magenta-blob:   #d42860;   /* decorative organic blob (bottom left) */
--text:           #1a1a2e;   /* body text */
--text-muted:     #4a5568;   /* descriptions, captions */
--text-light:     #718096;   /* metadata, dates */

/* Gradients */
--gradient-name: linear-gradient(90deg, #1a3563, #c41230);   /* name text gradient */
--gradient-hero: linear-gradient(160deg, #c5e8f2 0%, #e8f4f9 50%, #ffffff 100%);
--gradient-divider: linear-gradient(90deg, #1a3563, #c41230);  /* section dividers */
```

---

## Typography

### Font Families

| Font | Source | Role |
|---|---|---|
| **Instrument Serif** | Google Fonts | Display: hero name, section headings, closing quote |
| **Plus Jakarta Sans** | Google Fonts | UI: body copy, labels, badges, buttons, nav |

### Import (in layout.tsx)

```typescript
import { Instrument_Serif, Plus_Jakarta_Sans } from 'next/font/google'

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-display',
})

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-body',
})
```

### Type Scale

| Token | Font | Size | Weight | Usage |
|---|---|---|---|---|
| `display-xl` | Instrument Serif | 48–52px | 400 | Hero name "MAQUIDATO" |
| `display-lg` | Instrument Serif | 32px | 400 | Section headings |
| `display-italic` | Instrument Serif Italic | 22px | 400 | Taglines, quotes |
| `body-lg` | Plus Jakarta Sans | 16px | 400 | Main body copy |
| `body-sm` | Plus Jakarta Sans | 14px | 400 | Descriptions |
| `label` | Plus Jakarta Sans | 11px | 700 | All-caps labels, dates |
| `button` | Plus Jakarta Sans | 15px | 600 | Link buttons |

---

## Spacing

Based on 4px base unit. Key values:
- `4px` — micro gaps
- `8px` — tight spacing
- `16px` — standard padding
- `24px` — section inner padding
- `32px` — between components
- `48px` — between major sections
- `64px` — hero vertical padding

---

## Border Radius

- `9999px` — pill buttons, photo borders, badges
- `16px` — cards
- `8px` — small chips
- `4px` — micro elements

---

## Shadows

```css
--shadow-card:  0 2px 16px rgba(26, 53, 99, 0.08);
--shadow-hover: 0 8px 32px rgba(26, 53, 99, 0.16);
--shadow-badge: 0 4px 12px rgba(196, 18, 48, 0.20);
```

---

## Key Components

### Photo Circle
- Outer ring: 4px solid `--navy`
- Inner ring (gap): 4px white gap
- Inner ring: 2px solid `--crimson`
- Diameter: 120px (hero), 72px (community row)

### Name Treatment
- "Debbie" — Instrument Serif, 40px, `--navy`
- "MAQUIDATO" — Instrument Serif, 52px, gradient text (navy → crimson)

### Section Divider
- Short horizontal bar: 48px wide, 3px tall
- Gradient: `--gradient-divider` (navy → crimson)
- Matches the flyer's blue-red accent stripe

### Timeline Line
- Vertical: 2px, gradient from `--navy` at top to `--crimson` at bottom
- Drawn via GSAP ScrollTrigger (height animates 0 → 100% as user scrolls)
- Dot markers: 10px circle, alternates navy / crimson per entry

### Pill Buttons (Links)
- Full width, height 52px
- Background: white, border: 1.5px solid `--navy`
- Text: Plus Jakarta Sans 600, `--navy`
- Hover: background `--navy`, text white — animated via Motion.dev `whileHover`
- Icon: Lucide `ExternalLink`, 16px, right-aligned

### OnePNAABadge
- SVG circle, 100px diameter
- Background: `--teal-badge` (#1a7a8a)
- Radial text: "BUILT BY MEMBERS · UNITED IN PURPOSE" (Plus Jakarta Sans, 7px, white)
- Center: "We ARE One PNAA" (multi-weight, white)
- Decorative ring: 1px `--crimson` dashed border

### Organic Blob
- Bottom-left decorative element
- Color: `--magenta-blob` (#d42860), 40% opacity
- CSS `clip-path: ellipse()` or inline SVG
- Does not interfere with readable content

---

## Animation Principles

| Animation | Library | Trigger | Duration |
|---|---|---|---|
| Hero text word stagger | GSAP | On load | 0.6s, 0.1s stagger |
| Timeline line draw | GSAP ScrollTrigger | Scroll enter | 1.2s ease |
| Timeline role cards | Motion.dev | Scroll enter | 0.4s, alternating x offset |
| Link button hover | Motion.dev `whileHover` | Hover | 0.2s |
| Closing quote fade | GSAP ScrollTrigger | Scroll enter | 0.8s |
| Section headers | GSAP ScrollTrigger | Scroll enter | 0.5s fade+translateY |

**Rule**: Animations enhance — they do not block. Every animated element is visible in its final state by default (CSS). GSAP sets initial state after mount.

---

## Mobile Constraints

- Max width: `480px` (centered on larger screens with `mx-auto`)
- Min font size: `14px` (body descriptions)
- Touch targets: minimum `44px` height for all interactive elements
- No horizontal scroll at any viewport width
- Image placeholder uses SVG (no HTTP request until real photo)
