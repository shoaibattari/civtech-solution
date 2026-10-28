# Civtech Solution — website

Marketing site for Civtech Solution, built with Next.js 16 (App Router), React 19 and Tailwind CSS v4.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev
```

Open http://localhost:3000.

## Environment variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Public site URL for canonical links, sitemap and Open Graph |
| `RESEND_API_KEY` | API key for [Resend](https://resend.com), used by the contact form |
| `CONTACT_FROM_EMAIL` | Sender address — must be on a domain verified in Resend |
| `CONTACT_TO_EMAIL` | Inbox that receives enquiries (defaults to the company email) |

Without `RESEND_API_KEY`, enquiries are logged to the console in development and the form shows an error in production.

## Project structure

```
src/
  app/          routes, metadata files (sitemap, robots, OG image), contact Server Action
  components/   shared UI (Navbar, Footer, PageHero, cards, ContactForm, …)
  lib/
    site.js     company details, navigation, headline stats
    data.js     services, projects, values, team — edit content here
```

Brand colours (`navy-*`, `gold-*`) are defined as Tailwind theme tokens in `src/app/globals.css`.

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run lint` — ESLint
