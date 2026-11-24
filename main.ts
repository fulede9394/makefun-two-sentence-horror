import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Two-sentence horror: the smart speaker knows a voice it should not.
const LINE =
  "Every night my smart speaker whispers my name in a voice I don't recognize. Last night it spoke in my mother's voice — and my mother died ten years ago.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
