import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, normalize } from "node:path";

const docsRoot = "docs";
const summaryPath = join(docsRoot, "SUMMARY.md");
const failures = [];

function fail(message) {
  failures.push(message);
}

function walk(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    const stat = statSync(path);
    if (stat.isDirectory()) {
      results.push(...walk(path));
    } else if (path.endsWith(".md")) {
      results.push(path);
    }
  }
  return results;
}

if (!existsSync(summaryPath)) {
  fail("docs/SUMMARY.md is missing");
}

const markdownFiles = existsSync(docsRoot) ? walk(docsRoot) : [];
const summary = existsSync(summaryPath) ? readFileSync(summaryPath, "utf8") : "";
const summaryLinks = [...summary.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)].map((match) => match[1]);

for (const link of summaryLinks) {
  const target = normalize(join(docsRoot, link));
  if (!existsSync(target)) {
    fail(`SUMMARY.md links to missing file: ${link}`);
  }
}

for (const file of markdownFiles) {
  const text = readFileSync(file, "utf8");
  if (text.includes("—")) {
    fail(`${file} contains an em dash`);
  }

  const links = [...text.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)].map((match) => match[1]);
  for (const link of links) {
    if (/^(https?:|mailto:|#)/.test(link) || link === "TBD") continue;
    const clean = link.split("#")[0];
    if (!clean) continue;
    const target = normalize(join(dirname(file), clean));
    if (!existsSync(target)) {
      fail(`${file} links to missing file: ${link}`);
    }
  }
}

const missingFromSummary = markdownFiles
  .map((file) => normalize(file.slice(`${docsRoot}/`.length)))
  .filter((file) => file !== "SUMMARY.md")
  .filter((file) => !summaryLinks.includes(file));

for (const file of missingFromSummary) {
  fail(`SUMMARY.md does not include ${file}`);
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Validated ${markdownFiles.length} Markdown files and ${summaryLinks.length} SUMMARY links.`);
}
