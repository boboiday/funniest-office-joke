import { mkdirSync, writeFileSync } from "node:fs";

// The Funniest Office Joke, Judged Head to Head — make.fun entry
// Prints one office joke (1-200 chars) and validates the gate.

const LINE =
  "You set Slack to 'focus time'. Your boss DMs 'quick question', his boss DMs 'quick question', and HR DMs: 'quick question about your focus time.'";

if (LINE.length < 1 || LINE.length > 200) {
  console.error(`line is ${LINE.length} chars; gate is 1-200`);
  process.exit(1);
}

console.log(LINE);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
