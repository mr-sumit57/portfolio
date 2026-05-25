# Academic Portfolio — Assistant Professor

A fully responsive, dynamic single-page portfolio for faculty. Built with React, TypeScript, and Vite.

## Features

- **Hero** — Name, title, institution, photo, academic links, CV download
- **About** — Bio and education timeline
- **Research** — Focus areas, tags, active grants
- **Publications** — Search, filter by type/year, sort; highlighted papers
- **Teaching** — Course cards with terms and descriptions
- **Lab** — PI and team members
- **News** — Filterable updates (grants, talks, awards, etc.)
- **Contact** — Info cards + mailto contact form
- **Dark / light theme** — Persisted in localStorage
- **Scroll spy navigation** — Active section highlighting
- **Mobile menu** — Responsive layout

## Customize Your Content

Edit **`src/data/portfolio.ts`** — all text, publications, courses, news, and links live in one file. No code changes needed for routine updates.

Replace the placeholder profile image URL with your own photo path (e.g. put `photo.jpg` in `public/` and set `image: "/photo.jpg"`).

## Run Locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for Production

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to Netlify, Vercel, GitHub Pages, or any static host.

## Project Structure

```
src/
  data/portfolio.ts    ← Edit this for your content
  components/          ← UI sections
  hooks/               ← Theme, scroll spy, animations
  App.tsx
  index.css
```
