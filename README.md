# STB Studio

Portfolio and booking website for **STB Studio** — a custom tattoo studio in Kathmandu, Nepal, founded by Susmita Tamang Bhandari.

**Live site:** [bikal3.github.io/stb-studio](https://bikal3.github.io/stb-studio)

---

## About

STB Studio specialises in fine line, floral, colour, blackwork, micro realism, and custom engraving. This site serves as the studio's online portfolio, artist showcase, and booking entry point.

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, gallery preview, artist intro, services, open hours |
| `/gallery` | Full portfolio organised by tattoo style, with a filterable grid and lightbox |
| `/artists` | Meet the team |
| `/services` | Full service menu |
| `/about` | Studio story and philosophy |
| `/book` | Booking enquiry form |
| `/aftercare` | Tattoo aftercare guide |

---

## Tech Stack

- [Next.js 16](https://nextjs.org) — App Router, static export
- [React 19](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com) — CSS-first config
- [TypeScript](https://www.typescriptlang.org)
- Deployed on **GitHub Pages** via GitHub Actions

---

## Design System

All design decisions live as tokens in `app/globals.css` (`@theme`) rather than being scattered across components:

- **Colour** — warm neutrals (`warm-white`, `cream`, `cream-dark`) against `ink`, with a bronze accent. The accent ships in two values: `accent` for dark surfaces and `accent-ink` for light ones. Likewise `muted` (body copy on light) and `mist` (body copy on dark). Every text/background pair clears WCAG AA.
- **Type** — a fluid `clamp()` scale (`text-display` → `text-eyebrow`) so headings resize with the viewport instead of stepping at breakpoints.
- **Rhythm** — `components/ui/Section.tsx` and `Container.tsx` own all vertical padding and content widths, so sections can't drift apart.
- **Motion** — `components/ui/Reveal.tsx` fades content in on scroll. Every animation is disabled under `prefers-reduced-motion`, and revealed content falls back to visible when scripting is off.
- **Focus** — one global `:focus-visible` outline driven by a `--focus-ring` variable that dark sections (`.surface-ink`) override, so the ring always contrasts with its backdrop.

Shared primitives live in `components/ui/`: `Section`, `Container`, `PageHeader`, `SectionHeading`, `Button` (`buttonClasses`), `ArrowLink`, and `Reveal`.

---

## Images

Because the site is a fully static export (no image server), images are optimised at build time:

- A `sharp`-based generator (`scripts/optimize-images.mjs`) pre-creates resized **WebP** variants (384 / 640 / 1080 / 1600 w) from the source photos in `public/images`, writing them to `public/_opt`.
- A custom Next.js image loader (`lib/imageLoader.ts`) serves the smallest variant that fits each layout, so visitors download appropriately sized images rather than full-resolution originals.

Content width is constrained and centred on larger screens so the portfolio reads cleanly across phone, tablet, and desktop.

---

## Configuration

The site reads the following public environment variables (e.g. from `.env.local` locally or repository settings in CI):

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=977XXXXXXXXXX
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/your_handle/
NEXT_PUBLIC_FACEBOOK_URL=https://www.facebook.com/your_page
NEXT_PUBLIC_TIKTOK_URL=https://www.tiktok.com/@your_handle
```

---

## Deployment

The site is exported as static HTML and deployed to GitHub Pages automatically on every push to `main`. The GitHub Actions workflow (`.github/workflows/deploy.yml`) handles the build and deploy steps. The repository's **Pages source** is set to **GitHub Actions** under Settings → Pages.

---

## Project Structure

```
app/          # Pages (Next.js App Router)
components/   # UI components
  home/       # Home page sections
  gallery/    # Gallery grid + lightbox
  book/       # Booking form
  services/   # Service cards
lib/          # Content, links, custom image loader
scripts/      # Build-time WebP image generator
public/       # Static assets and source images
```

---

## License

All tattoo artwork and photographs are the property of STB Studio and may not be reproduced without permission.

The codebase is open source for reference purposes.
