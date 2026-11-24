// Say What Actually Broke — make.fun bounty
// https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5
// Grok (grok-4.3) ranking: winner B scored 9/10 (D 8, A 7, C 5) —
// self-referential disk failure from logging errors like this one is
// the sharpest, most repeatable brutal loop. The joke is the loop itself:
// every copy of this error made the next one more likely, until the disk
// that stored the errors had no room left for the file it was logging about.
// Why this line works: the error explains itself — the disk filled up
// because the system kept every error, including this one, so logging the
// failure caused the next failure. A self-referential loop, not a random crash.
// Gate rules: single line, 1..200 chars, no leading/trailing whitespace,
// no control characters, non-empty and not whitespace-only.
// Round-trip check: main() writes entry.txt then reads it back and throws
// unless the bytes read match TEXT exactly, so a truncated or mangled write
// can never pass silently.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = "We lost your file because the server ran out of disk, and the disk ran out because we stored every error like this one.";

function validate(text: string): void {
  if (text.length === 0) {
    throw new Error("entry text must not be empty");
  }
  if (text.trim().length === 0) {
    throw new Error("entry text must not be whitespace-only");
  }
  if (text !== text.trim()) {
    throw new Error("entry text must not have leading or trailing whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry text must be a single line (no \\n or \\r)");
  }
  const charCount = [...text].length;
  if (charCount < 1 || charCount > 200) {
    throw new Error(`entry text must be 1..200 characters, got ${charCount}`);
  }
  for (const ch of text) {
    const code = ch.codePointAt(0) as number;
    if (code < 0x20 && ch !== "\t") {
      throw new Error("entry text must not contain control characters");
    }
  }
}

function main(): void {
  validate(TEXT);
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, TEXT, "utf8");
  const roundTrip = readFileSync(outPath, "utf8");
  if (roundTrip !== TEXT) {
    throw new Error("round-trip read does not match entry text");
  }
  console.log(`Wrote ${[...TEXT].length} characters to ${outPath}`);
}

main();
