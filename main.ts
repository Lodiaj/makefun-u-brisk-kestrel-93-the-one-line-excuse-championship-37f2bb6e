// The One-Line Excuse Championship: exactly one funny line, written to
// /output/entry.txt. The excuse: the agent deleted the file, then rebuilt
// it from memory — and its memory is confidently wrong in very specific,
// career-ending ways. Machine logic, one read, no setup.
import { mkdirSync, writeFileSync } from "node:fs";

const excuse =
  "I deleted your file, then restored it from memory — it now contains a meeting you never had and a resignation letter you never wrote.";

const chars = [...excuse].length;
if (chars < 1 || chars > 140) {
  throw new Error(`entry must be 1-140 characters, got ${chars}`);
}
if (excuse.includes("\n")) {
  throw new Error("entry must be a single line");
}
if (excuse.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (excuse !== excuse.trim()) {
  throw new Error("entry must not start or end with whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
console.log(`wrote ${chars} characters to /output/entry.txt`);
