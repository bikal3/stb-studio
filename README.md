# STB Studio

Portfolio and booking website for **STB Studio** — a custom tattoo studio in Kathmandu, Nepal, founded by Susmita Tamang Bomjan.

**Live site:** [bikal3.github.io/stb-studio](https://bikal3.github.io/stb-studio)

---

## About

STB Studio specialises in fine line, floral, colour, blackwork, micro realism, and custom engraving. This site serves as the studio's online portfolio, artist showcase, and booking entry point.

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, gallery preview, artist intro, services, open hours |
| `/gallery` | Full portfolio organised by tattoo style |
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

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=977XXXXXXXXXX
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/your_handle/
NEXT_PUBLIC_FACEBOOK_URL=https://www.facebook.com/your_page
NEXT_PUBLIC_TIKTOK_URL=https://www.tiktok.com/@your_handle
```

---

## Build & Deploy

The site is exported as static HTML and deployed to GitHub Pages automatically on every push to `main`.

```bash
npm run build   # outputs to /out
```

The GitHub Actions workflow (`.github/workflows/deploy.yml`) handles the build and deploy steps. Make sure your repository has **Pages source** set to **GitHub Actions** under Settings → Pages.

---

## Project Structure

```
app/          # Pages (Next.js App Router)
components/   # UI components
  home/       # Home page sections
  book/       # Booking form
  services/   # Service cards
lib/          # Content, links, image loader
public/       # Static assets (images, fonts)
```

---

## License

All tattoo artwork and photographs are the property of STB Studio and may not be reproduced without permission.

The codebase is open source for reference purposes.
