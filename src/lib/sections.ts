import { international, sections } from "@/data/content";
import { visible } from "./placeholders";

// Sections actually rendered on the page. International disappears (from
// the page, the navigation and the numbering) when none of its projects is
// ready to show, so production never displays an empty case study.
export const hasInternational = visible(international.projects).length > 0;

export const activeSections = sections.filter(
  (s) => s.id !== "international" || hasInternational
);

export const sectionNumber = (id: string) =>
  String(activeSections.findIndex((s) => s.id === id) + 1).padStart(2, "0");
