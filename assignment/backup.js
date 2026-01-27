const fs = require("fs");
const path = require("path");

const sourceFile = path.join(__dirname, "original.txt");
const backupDir = path.join(__dirname, "backup");

if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir);
}

// Timestamp
const timestamp = Date.now();

// Backup file name
const backupFile = path.join(
  backupDir,
  `original-${timestamp}.txt`
);

// Copy file
fs.copyFile(sourceFile, backupFile, (err) => {
  if (err) {
    console.log("Error creating backup:", err.message);
  } else {
    console.log("Backup created successfully");
    console.log("Backup file:", backupFile);
  }
});
