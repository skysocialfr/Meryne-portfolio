// Placeholders (items flagged `placeholder: true` in content.ts) are shown
// locally and on Vercel preview deployments so you can see where your media
// goes, but hidden on the production site so recruiters never see them.
// Set SHOW_PLACEHOLDERS=true|false in Vercel to override.
export const SHOW_PLACEHOLDERS =
  process.env.SHOW_PLACEHOLDERS !== "false";

export function visible<T extends { placeholder?: boolean }>(items: T[]): T[] {
  return SHOW_PLACEHOLDERS ? items : items.filter((i) => !i.placeholder);
}
