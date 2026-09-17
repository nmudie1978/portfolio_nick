# Nick Mudie — professional site

Personal professional site for Nick Mudie: telecom architecture, BSS/OSS,
transformation and AI-native telecom. Built as a static, content-driven
Next.js site.

## Stack

- Next.js (App Router, fully static output) · TypeScript · Tailwind CSS v4
- No CMS, no animation library. Content is typed TypeScript in `src/content/`.
- Deploys to Vercel with no configuration.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static build; also runs type checking
npm run lint
```

## Structure

```
src/
  app/                    routes (one folder per page; [slug] for detail pages)
    layout.tsx            fonts, metadata, JSON-LD, header/footer
    opengraph-image.tsx   generated social card
    sitemap.ts robots.ts  generated from content
  components/
    layout/               SiteHeader, SiteFooter, Section, PageIntro, Container
    ui/                   Eyebrow, Tag, Links, Cards, Reveal, ContentBlocks
    architecture/         ArchitectureMatrix (interactive), FlowDiagram, StackDiagram
    home/                 Hero
  content/                all site content, typed by content/types.ts
    person.ts             name, positioning, hero copy, links
    expertise.ts          seven expertise areas
    experience.ts         career progression + organisations
    case-studies.ts       case studies (engagements and patterns)
    insights.ts           "Thinking" viewpoints
    focus.ts              current focus areas
    architecture.ts       the matrix model: layers, columns, nodes, lenses
    site.ts               site name, URL, navigation, keywords
  lib/                    metadata helper, content resolvers, cn()
```

## Adding content

- **Case study** — append to `caseStudies` in `src/content/case-studies.ts`.
  The route, sitemap entry, cards and related links are generated.
- **Viewpoint** — append to `insights` in `src/content/insights.ts`.
- **Experience** — edit `src/content/experience.ts`. `role` and `period` are
  `null` until verified; they are only rendered when set.
- **Links** — `src/content/person.ts` → `links`. `email` and `cv` are `null`
  until a public address / CV path is chosen; the site adapts.

Content blocks (`p`, `h`, `list`, `callout`, `flow`, `stack`) are rendered by
`ContentBlocks`, so diagrams can be placed inline in any case study or
viewpoint.

## Environment

- `NEXT_PUBLIC_SITE_URL` — canonical origin (e.g. `https://example.com`).
  Falls back to Vercel's production URL, then `http://localhost:3000`.

## Design system

Tokens live in `src/app/globals.css` (`@theme`): a warm graphite ground,
paper-toned type, a copper accent for fulfilment/action and a cool "signal"
tone reserved for assurance/runtime feedback. Typography roles are exposed
as utilities (`t-display`, `t-h1`…`t-h3`, `t-lead`, `t-body`, `t-small`,
`t-meta`, `t-mono`). Motion is limited to page entrance, reveal-on-scroll,
diagram edge flow and hover states, all disabled under `prefers-reduced-motion`.
