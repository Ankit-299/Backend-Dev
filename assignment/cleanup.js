const fs = require("fs");
const path = require("path");

const TARGET_DIR = path.join(__dirname, "cleanup_test");
const DAYS_7 = 7 * 24 * 60 * 60 * 1000;

fs.readdir(TARGET_DIR, (err, files) => {
  if (err) {
    console.log("Directory not found");
    return;
  }

  const now = Date.now();

  files.forEach((file) => {
    const filePath = path.join(TARGET_DIR, file);

    fs.stat(filePath, (err, stats) => {
      if (err) return;

      const fileAge = now - stats.mtimeMs;

      if (fileAge > DAYS_7) {
        fs.unlink(filePath, (err) => {
          if (!err) {
            console.log(`Deleted old file: ${file}`);
          }
        });
      }
    });
  });
});
