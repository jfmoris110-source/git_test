#!/usr/bin/env node
// Sequential pre-commit runner: runs checks per filetype in sequence to avoid parallel resource spikes
const { execSync } = require("node:child_process");
function run(cmd) {
  console.log(`\n$ ${cmd}`);
  execSync(cmd, { stdio: "inherit" });
}

try {
  const out = execSync(
    "git diff --cached --name-only --diff-filter=ACM",
  ).toString();
  const files = out
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
  if (files.length === 0) {
    console.log("No staged files. Skipping pre-commit checks.");
    process.exit(0);
  }

  const js = files.filter((f) => /\.(js|jsx)$/.test(f));
  const ts = files.filter((f) => /\.(ts|tsx)$/.test(f));
  const css = files.filter((f) => /\.css$/.test(f));
  const html = files.filter((f) => /\.html?$/.test(f));

  // Run sequentially: JS/TS -> CSS -> HTML
  if (js.length) {
    run(
      `yarn biome check --write --unsafe ${js.map((f) => JSON.stringify(f)).join(" ")}`,
    );
  }
  if (ts.length) {
    run(
      `yarn biome check --write --unsafe ${ts.map((f) => JSON.stringify(f)).join(" ")}`,
    );
  }
  if (css.length) {
    run(`npx stylelint --fix ${css.map((f) => JSON.stringify(f)).join(" ")}`);
  }
  if (html.length) {
    run(`npx htmlhint ${html.map((f) => JSON.stringify(f)).join(" ")}`);
  }

  // If we reach here all checks passed
  process.exit(0);
} catch (_err) {
  console.error("\nPre-commit checks failed. Aborting commit.");
  process.exit(1);
}
