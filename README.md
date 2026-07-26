# STB Studio

Portfolio and booking website for **STB Studio** — a custom tattoo studio in Kathmandu, Nepal, founded by Susmita Tamang Bhandari.

**Live site:** [bikal3.github.io/stb-studio](https://bikal3.github.io/stb-studio)

---

## About

STB Studio is a tattoo sanctuary in Kathmandu built around a single idea: every tattoo is a story, and every piece a companion for life. Alongside custom tattoos — fine line, floral, colour, blackwork, and micro realism — the studio makes collectible art objects and one-of-a-kind limited drops.

This site is the studio's home on the web. It carries the full portfolio, introduces the artists, lays out the service menu and pricing, and gives visitors a direct path to book a consultation. It is designed to feel like the studio itself: calm, considered, and unmistakably its own — warm neutrals against ink black, generous typography, and imagery given room to breathe.

The whole site is a static export, so it loads fast, costs nothing to host, and stays online without a server to maintain.

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

Because the site is a fully static export (no image server), images are optimised ahead of time:

- A `sharp`-based generator (`scripts/optimize-images.mjs`) pre-creates resized **WebP** variants (384 / 640 / 1080 / 1600 w) from the source photos in `public/images`, writing them to `public/_opt`. On the same pass it records each photo's intrinsic dimensions to `lib/imageDimensions.ts`.
- A custom Next.js image loader (`lib/imageLoader.ts`) serves the smallest variant that fits each layout, so visitors download appropriately sized images rather than full-resolution originals.
- The gallery uses those recorded dimensions to lay photos out as masonry on their true aspect ratios, so each piece is shown whole rather than cropped to a square.

---

## Project Structure

```
app/          # Pages (Next.js App Router)
components/   # UI components
  home/       # Home page sections
  gallery/    # Gallery grid + lightbox
  book/       # Booking form
  services/   # Service cards
  ui/         # Shared design-system primitives
lib/          # Content, links, custom image loader
scripts/      # Build-time WebP image generator
public/       # Static assets and source images
```

---

## License

All tattoo artwork and photographs are the property of STB Studio and may not be reproduced without permission.

The codebase is open source for reference purposes.
