# Manav Patel — Personal Portfolio

Recruiter-facing portfolio site: hero, about, skills, experience timeline, projects,
certification, education, and contact.

Built with **Astro**, **Tailwind CSS v4**, and **Preline UI**, covered by **Playwright** E2E
tests, and deployed to **GitHub Pages** via GitHub Actions.

## Live website

https://manavpatel1310.github.io/

## Getting started

**Prerequisites:** Node.js 22+, npm

```bash
npm install
npm run dev
```

Visit `http://localhost:4321`.

All page content (experience, projects, skills, links) lives in one file:
[`src/data/resume.ts`](src/data/resume.ts) — edit it and the site updates.

## Testing

```bash
npm run test       # headless Playwright run (builds + previews the site first)
npm run test:ui    # interactive Playwright UI
```

## Deployment

Every push to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the site and publishes it to GitHub Pages.

## License

MIT © 2026 Manav Patel
