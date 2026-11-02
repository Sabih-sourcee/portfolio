# Sabih Ur Rehman

Personal site for [sabihrehman.tech](https://sabihrehman.tech).

This site is based on the personal website template by [Akash Bhadange](https://www.designerdada.com) ([@designerdada](https://github.com/designerdada)):

https://github.com/designerdada/Designerdadacom

The template README says: “Open source - feel free to use as a template for your own site!”

The words, portrait, and project links are Sabih’s. The template’s own text, photos, and logo are not used.

## Add a blog post

Posts live in `src/data/posts.ts`. Copy the sample object, then change:

- `slug` — lowercase words separated by hyphens. This becomes `/blog/your-slug`.
- `title` — the headline.
- `date` — optional. Leave it as `""` if you do not have a date.
- `paragraphs` — one string per paragraph.

Delete the sample post (`hello-world`) when you no longer need it. `npm run build` writes each post into the static export.

## Develop

```bash
npm install
npm run dev
```

## Deploy

GitHub Pages publishes the `gh-pages` branch. `public/CNAME` is `sabihrehman.tech`.

```bash
npm run deploy
```

That builds a static export into `dist` and publishes it with `gh-pages`.
