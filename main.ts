// The 3AM Commit Message — writes one commit line to /output/entry.txt.
// Deterministic: same bytes on every run, no trailing newline
// (smaller text wins an exact-score tie). The line is checked
// against the gate (1-139 chars) before it is written.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "fix: added a 'do not touch' comment above the code I touched 14 times tonight";

if (LINE.length < 1 || LINE.length > 139 || LINE.trim().length === 0) {
  throw new Error(`entry length ${LINE.length} is outside the 1-139 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
