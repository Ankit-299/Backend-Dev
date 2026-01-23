const fs = require("fs");
const readline = require("readline");
const path = require("path");

// Input log file (large file)
const logFilePath = path.join(__dirname, "server.log");

// Output summary file
const reportFilePath = path.join(__dirname, "summary-report.txt");

// Counters
let totalLines = 0;
let errorCount = 0;
let warningCount = 0;
let infoCount = 0;

// Create read stream
const readStream = fs.createReadStream(logFilePath, {
  encoding: "utf8",
});

// Use readline to process file line by line (STREAMING)
const rl = readline.createInterface({
  input: readStream,
  crlfDelay: Infinity,
});

rl.on("line", (line) => {
  totalLines++;

  if (line.includes("ERROR")) errorCount++;
  else if (line.includes("WARNING")) warningCount++;
  else if (line.includes("INFO")) infoCount++;
});

rl.on("close", () => {
  const summary = `
Log File Analysis Report
------------------------
Total Lines   : ${totalLines}
ERROR Count   : ${errorCount}
WARNING Count : ${warningCount}
INFO Count    : ${infoCount}
`;

  fs.writeFile(reportFilePath, summary, (err) => {
    if (err) {
      console.log("Error writing summary file");
    } else {
      console.log("Log analysis completed successfully");
      console.log("Summary report generated");
    }
  });
});
