# STB Studio

Portfolio and booking website for **STB Studio** — a custom tattoo studio in Kathmandu, Nepal, founded by Susmita Tamang Bhandari.

**Live site:** [bikal3.github.io/stb-studio](https://bikal3.github.io/stb-studio)

---

## About

STB Studio is a tattoo sanctuary in Kathmandu built around a single idea: every tattoo is a story, and every piece a companion for life. Alongside custom tattoos — fine line, floral, colour, blackwork, and micro realism — the studio makes collectible art objects and one-of-a-kind limited drops.

This site is the studio's home on the web. It carries the full portfolio, introduces the artist, lays out the service menu and pricing, and gives visitors a direct path to book a consultation. It is designed to feel like the studio itself: calm, considered, and unmistakably its own — warm neutrals against ink black, generous typography, and imagery given room to breathe.

The whole site is a static export, so it loads fast, costs nothing to host, and stays online without a server to maintain.

---

## Pages

| Route        | Description                                                                                                                               |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `/`          | Home — hero, gallery preview, artist intro, services, open hours                                                                          |
| `/gallery`   | Full portfolio organised by tattoo style, with a filterable grid and lightbox                                                             |
| `/artists`   | The artist behind the studio (linked from the footer, not the main nav — it would duplicate `/about` while STB is a single-artist studio) |
| `/services`  | Full service menu                                                                                                                         |
| `/about`     | Studio story and philosophy                                                                                                               |
| `/book`      | Booking enquiry form                                                                                                                      |
| `/aftercare` | Tattoo aftercare guide                                                                                                                    |

---

## Tech Stack

- [Next.js 16](https://nextjs.org) — App Router, static export
- [React 19](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com) — CSS-first config
- [TypeScript](https://www.typescriptlang.org)

---

## Images

Because the site is a fully static export (no image server), images are optimised ahead of time:

- A `sharp`-based generator (`scripts/optimize-images.mjs`) pre-creates resized **WebP** variants (384 / 640 / 1080 / 1600 w) from the source photos in `public/images`, writing them to `public/_opt`. On the same pass it records each photo's intrinsic dimensions to `lib/imageDimensions.ts`.
- A custom Next.js image loader (`lib/imageLoader.ts`) serves the smallest variant that fits each layout, so visitors download appropriately sized images rather than full-resolution originals.
- The gallery uses those recorded dimensions to lay photos out as masonry on their true aspect ratios, so each piece is shown whole rather than cropped to a square.
- After the export, `scripts/prune-export.mjs` deletes `out/images` — the full-resolution originals that `output: 'export'` copies out of `public/`. Nothing requests them (every image resolves through the loader to `/_opt`), so shipping them would add ~13MB to the deploy and publish the artwork at print resolution. The script refuses to prune if `out/_opt/images` is missing, so a failed optimiser run can never produce an imageless site.

---

## Metadata and social previews

- `public/opengraph-image.png` (1200×630) is the card that appears when the site is shared. It is declared in `app/layout.tsx` by **absolute URL**, and deliberately does _not_ use the `app/opengraph-image.*` file convention. Two separate reasons:
  - A generated `opengraph-image.tsx` route exports an **extensionless** file, which GitHub Pages serves as `application/octet-stream` — social scrapers reject that.
  - The file convention resolves URLs as `metadataBase + basePath + filename`. Since `siteConfig.url` already ends in the basePath, that emitted a doubled `/stb-studio/stb-studio/…` which 404s. An absolute URL is never rewritten.
- To restyle the card, replace the PNG at the same size.
- **`npm run build` verifies this.** `scripts/verify-export.mjs` resolves the `og:image`, `twitter:image`, `icon` and `canonical` URLs in the built HTML back to files in `out/`, and fails the build on a doubled basePath or a dangling link. It exists because the basePath bug above shipped: `NEXT_PUBLIC_BASE_PATH` is only set in CI, so a local build cannot reproduce it by hand.
- `app/sitemap.ts` emits `out/sitemap.xml`. `app/robots.ts` emits `out/robots.txt`, but note that on a project-page deploy it lands at `/stb-studio/robots.txt`, and crawlers only ever read `bikal3.github.io/robots.txt` — so it has no effect today. Submit the sitemap through Google Search Console instead. It starts working as written the moment the site moves to a custom domain.
- Structured data (`TattooParlor`) is inlined in `app/layout.tsx`. **Outstanding:** it carries no street address, because the studio's has not been supplied — adding one there and in the footer is the single biggest remaining local-SEO win.

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
scripts/      # Build-time WebP generator + post-export pruning
public/       # Static assets and source images
```

All studio copy lives in `lib/content.ts`, and contact details in `lib/links.ts` — including `ARTIST_NAME`, which page copy, metadata, structured data, and every gallery alt string derive from, so the artist's name is changed in exactly one place.

---

## License

All tattoo artwork and photographs are the property of STB Studio and may not be reproduced without permission.

The codebase is open source for reference purposes.
