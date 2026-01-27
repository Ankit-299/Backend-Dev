const fs = require("fs");

fs.readFile("data.json", "utf8", (err, data) => {
  if (err) {
    console.log("Error reading file:", err.message);
    return;
  }

  try {
    const jsonData = JSON.parse(data);
    console.log("Parsed JavaScript Object:");
    console.log(jsonData);
  } catch (error) {
    console.log("Error parsing JSON:", error.message);
  }
});
