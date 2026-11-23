// Real-Life Patch Notes: The Comedy Changelog
// Writes one patch-note line for a bug in real life / human biology to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR). Node 22 stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "v2.1.0: fixed a bug where the brain replayed your most embarrassing moment at 3 a.m. It now replays it at 3 p.m. in front of witnesses.";

// The bounty gate: /output/entry.txt must be UTF-8 text of 1 to 160
// characters, not only white space. Fail loudly instead of shipping an
// invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 160 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${ENTRY.length} chars; must be 1-160`);
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
