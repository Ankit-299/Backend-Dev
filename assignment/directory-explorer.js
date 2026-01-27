const fs = require("fs");
const path = require("path");

function exploreDirectory(dirPath) {
  fs.readdir(dirPath, (err, items) => {
    if (err) {
      console.log("Cannot read directory:", err.message);
      return;
    }

    items.forEach((item) => {
      const itemPath = path.join(dirPath, item);

      fs.stat(itemPath, (err, stats) => {
        if (err) return;

        if (stats.isFile()) {
          console.log(`FILE : ${itemPath} | Size: ${stats.size} bytes`);
        } else if (stats.isDirectory()) {
          console.log(`DIR  : ${itemPath}`);
          exploreDirectory(itemPath); // recursion
        }
      });
    });
  });
}

// Start exploring
const TARGET_DIR = path.join(__dirname, "explorer_test");
exploreDirectory(TARGET_DIR);
