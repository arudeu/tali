# Tali
Next.js 15, Tailwind CSS v4, shadcn/ui-style components, TypeScript, motion.dev (`motion/react`), Manrope.

    npm install
    npm run dev

## Updating content
- Projects: edit `data/projects.json` (name, detail, image, href, tags). Put screenshots in `public/projects/`.
- Templates: edit `data/templates.json` (slug, name, tier 1/2/3, image, videoUrl, previewUrl). Put screenshots in `public/templates/`.
  Put videos (.mp4) in `public/templates/` and set `videoUrl` to show a "Watch video" button. A template with no `image` is shown as "Coming soon". Tier colors: `lib/data.ts`.
- Pricing and currency: `lib/data.ts`
- Contact email: `components/contact.tsx`
- Favicon: `app/icon.svg`
