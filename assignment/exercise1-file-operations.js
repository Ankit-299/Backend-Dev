const fs = require("fs");

// Read file
fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error reading file");
    return;
  }

  const words = data.trim().split(/\s+/);
  const count = words.length;

  const result = `Total Words: ${count}`;

  // Write to new file
  fs.writeFile("output.txt", result, (err) => {
    if (err) {
      console.log("Error writing file");
    } else {
      console.log("Word count written to output.txt");
    }
  });
});
