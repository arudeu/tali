# Tali

Portfolio website for **Tali**, a wedding invitation business by Aldous Conde. It shows pricing, past projects, a template gallery with video previews, and a contact form.

## Tech stack

- [Next.js](https://nextjs.org/) 15 (App Router)
- [React](https://react.dev/) 19 and TypeScript
- [Tailwind CSS](https://tailwindcss.com/) v4
- [shadcn/ui](https://ui.shadcn.com/)-style components (`components/ui`)
- [motion.dev](https://motion.dev/) (`motion/react`) for animation
- [Manrope](https://fonts.google.com/specimen/Manrope) via `next/font`

## Getting started

Requires Node.js 18.18 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # run the production build
```

## Pages and sections

| Route | Contents |
| --- | --- |
| `/` | Hero, feature marquee, Pricing, Projects, About, Contact |
| `/templates` | Template gallery with tier filters and video preview |

## Updating content

### Projects

Edit `data/projects.json`. Put screenshots in `public/projects/`.

```json
{
  "name": "Joaquin and Krisna",
  "detail": "Short description of the project.",
  "image": "/projects/joaquin-krisna.png",
  "href": "https://example.com",
  "tags": ["RSVP", "Map", "Gifts", "Music"]
}
```

With one project, it is shown full width. With two or more, they show in a two-column grid.

### Templates

Edit `data/templates.json`. Put screenshots and videos in `public/templates/`.

```json
{
  "slug": "burgundy-seal",
  "name": "Burgundy Seal",
  "tier": 2,
  "image": "/templates/burgundy-seal.jpg",
  "videoUrl": "/templates/burgundy-seal.mp4",
  "previewUrl": ""
}
```

| Field | Description |
| --- | --- |
| `slug` | Unique id, lowercase with dashes |
| `name` | Display name |
| `tier` | `1`, `2` or `3` |
| `image` | Screenshot path. If empty, the card shows "Coming soon" |
| `videoUrl` | Optional `.mp4` path. Adds a play button and video popup |
| `previewUrl` | Optional live demo link |

Tip: compress preview videos before adding them (for example 1280px wide, under 10 MB) so the page loads fast.

### Pricing and currency

Edit `lib/data.ts`: `CURRENCY` (default `₱`) and the `tiers` array (price, features, tier color).

| Tier | Price | Color |
| --- | --- | --- |
| Tier 1, Basic | 1,500 | Green |
| Tier 2, Premium | 3,000 | Orange |
| Tier 3, Customized | 7,000+ | Purple |

### Contact email

Edit `EMAIL` in `components/contact.tsx`. The form currently opens the visitor's email app with the message filled in. There is no backend.

### About section

Edit `components/about.tsx` and replace the photo placeholder with your photo.

## Brand

- Logo: two linked rings (ink and orange) with the "tali" wordmark. Component: `components/logo.tsx`
- Favicon: `app/icon.svg`
- Loading screen: draws an infinity symbol, then settles into the rings. Component: `components/loader.tsx`
- Colors (in `app/globals.css`):

| Name | Hex |
| --- | --- |
| Cream | `#FAF3E1` |
| Sand | `#F5E7C6` |
| Accent orange | `#FA8112` |
| Ink | `#222222` |

Palette: https://colorhunt.co/palette/faf3e1f5e7c6fa8112222222

## Project structure

```
app/
  layout.tsx          Root layout, font, loader, navbar, footer
  page.tsx            Home page
  templates/page.tsx  Template gallery
  icon.svg            Favicon
  globals.css         Tailwind theme and colors
components/
  ui/                 Button, Card (shadcn-style)
  hero.tsx, hero-art.tsx, marquee.tsx, pricing.tsx,
  projects.tsx, about.tsx, contact.tsx, footer.tsx,
  navbar.tsx, loader.tsx, logo.tsx, video-modal.tsx, ...
data/
  projects.json       Your projects
  templates.json      Your templates
lib/
  data.ts             Pricing tiers, currency, typed data
  utils.ts            Class name helper
public/
  projects/           Project screenshots
  templates/          Template screenshots and videos
```

## Deploying

The easiest option is [Vercel](https://vercel.com/): push the repo to GitHub, import it in Vercel, and deploy. No environment variables are needed.

## Credits

A personal project by Aldous Conde, web developer.
