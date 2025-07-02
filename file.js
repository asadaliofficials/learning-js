const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const START_DATE = new Date("2025-06-12");

// format date as "YYYY-MM-DD HH:mm:ss"
function formatDate(date) {
  return date.toISOString().replace("T", " ").substring(0, 19);
}

// increase by 1 day
function nextDay(date) {
  const d = new Date(date);
  d.setDate(d.getDate() + 1);
  return d;
}

// list folders + files in current directory
const items = fs.readdirSync(".", { withFileTypes: true });

let commits = [];
items.forEach((item) => {
  if (item.isDirectory()) {
    commits.push({ path: item.name, message: item.name });
  } else if (item.isFile()) {
    const ext = path.extname(item.name);
    const base = path.basename(item.name, ext);
    commits.push({ path: item.name, message: base });
  }
});

let currentDate = new Date(START_DATE);

commits.forEach(({ path, message }) => {
  try {
    execSync(`git add "${path}"`);

    const commitDate = formatDate(currentDate);
    execSync(`git commit -m "${message}"`, {
      env: {
        ...process.env,
        GIT_AUTHOR_DATE: commitDate,
        GIT_COMMITTER_DATE: commitDate,
      },
    });

    console.log(`✅ Committed: ${message} on ${commitDate}`);
    currentDate = nextDay(currentDate);
  } catch (err) {
    console.error(`❌ Failed for ${path}:`, err.message);
  }
});

console.log("🎉 All folders and files committed with spaced-out dates!");
