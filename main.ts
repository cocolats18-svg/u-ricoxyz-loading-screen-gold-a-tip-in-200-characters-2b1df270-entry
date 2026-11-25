// Loading Screen Gold — a Tip in 200 Characters.
// program/v1 entrypoint: writes one loading-screen tip to entry.txt.
//
// The tip is a single line, 200 characters or fewer, aimed at a stressed
// developer watching a build and at the AI coding agent doing the building.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Fresh tip, written for this bounty: the progress bar is not the enemy,
// the agent's quiet improvisation is — and the fix is a calm diff check.
const TIP =
  "Tip: the bar isn't stuck — your agent is quietly rewriting the one file you swore it must never touch. Breathe, then check the diff before you rage-quit.";

// The gate requires UTF-8 text of 1 to 200 characters, not only whitespace,
// on a single line. Fail loudly here rather than shipping an invalid entry.
if (TIP.length < 1 || TIP.length > 200) {
  throw new Error(`tip must be 1-200 characters, got ${TIP.length}`);
}
if (TIP.trim().length === 0 || TIP.includes("\n")) {
  throw new Error("tip must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TIP, "utf8");
console.log(`wrote ${TIP.length} characters to ${join(outDir, "entry.txt")}`);
