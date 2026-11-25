// The Most Boring Object, Reviewed in One Line — entry program.
// Writes one review of a boring everyday object (<=200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_PATH = "/output/entry.txt";
const REVIEW =
  "Five stars. It has held the same coat since 2019, never complained, never asked for a raise, never called in sick — the most reliable employee I own.";

const chars = [...REVIEW].length;
if (chars < 1 || chars > 200) {
  throw new Error(`review is ${chars} chars, outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(ENTRY_PATH, REVIEW, "utf8");
console.log(`wrote ${chars} chars to ${ENTRY_PATH}`);
