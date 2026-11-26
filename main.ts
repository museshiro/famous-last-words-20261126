import { mkdirSync, writeFileSync } from "node:fs";

// One-line epitaph: a dead perfectionist still arguing with the stonecutter
// over the very words carved on his own stone.
const LINE = "“Spell it right,” I told the stonecutter. He carved “Spell it rite.” Now I’m dead and still correcting him.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
