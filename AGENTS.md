<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project overview

Portfolio site for Mahmudul Hasan Jony. Single-page app (home + `/projects` route). Deployed on Vercel.

## Stack

- **Next.js 16** (App Router, `src/` directory) with React 19
- **Tailwind CSS v4** — CSS-first config, no `tailwind.config.*`. Theme defined in `src/app/globals.css` via `@theme` directive and CSS custom properties.
- **GSAP** (`@gsap/react`) + **Framer Motion** for animations
- **Lenis** for smooth scrolling
- **next-themes** for dark/light mode (class-based, default: light)
- **Web3Forms** for contact form email delivery (needs `WEB3FORMS_ACCESS_KEY` env var)

## Commands

```bash
npm run dev        # start dev server
npm run build      # production build
npm run lint       # eslint (eslint-config-next/core-web-vitals)
```

No test framework. No typecheck (JavaScript, not TypeScript).

## File conventions

- `src/app/` — App Router pages and API routes (`.js`)
- `src/components/` — All UI components (`.jsx`)
- `src/assets/` — Static images (imported directly in components)
- Path alias: `@/*` maps to `./src/*`

## Gotchas

- **Tailwind v4**: no `tailwind.config.js`. All theme tokens (colors, fonts, typography) live in `globals.css` under `@theme`. Use `@theme` block to add new design tokens.
- **Fonts**: Plus Jakarta Sans (headings via `--font-heading`), Inter (body via `--font-body`). Loaded in `layout.js` via `next/font/google`.
- **Theme**: `class` attribute on `<html>`. Always set `suppressHydrationWarning` on `<html>` and `<body>` when using next-themes.
- **Smooth scroll**: Lenis wraps content in `SmoothScroll` component. Layout order matters: `PageLoader > CustomCursor > ScrollProgress > SmoothScroll > content`.
- **Images**: Remote patterns configured for `lh3.googleusercontent.com` and `images.unsplash.com` in `next.config.mjs`. Local assets imported as JS modules.
- **Contact API**: `POST /api/contact` uses Web3Forms. Falls back to test mode if env var missing.
- **Analytics**: Microsoft Clarity (hardcoded ID). Google Analytics only in production with `NEXT_PUBLIC_GA_ID` env var.
- **No CI/CD config** in repo. Deployed via Vercel git integration.
