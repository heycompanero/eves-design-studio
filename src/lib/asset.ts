/**
 * Resolve a path from /public against the deploy base.
 * The site is served from a subpath on GitHub Pages, so a bare "/foto/x.webp"
 * would resolve against the domain root and 404.
 */
export const asset = (p: string) =>
  `${import.meta.env.BASE_URL}${p.replace(/^\//, "")}`;
