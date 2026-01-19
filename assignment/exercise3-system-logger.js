const os = require("os");
const fs = require("fs");

function getSystemInfo() {
  return {
    cpu: os.cpus().length,
    freeMemory: os.freemem(),
    totalMemory: os.totalmem(),
    platform: os.platform(),
  };
}

setInterval(() => {
  const info = getSystemInfo();
  const log = `${new Date().toLocaleString()} | CPU: ${info.cpu} | FreeMem: ${info.freeMemory} | TotalMem: ${info.totalMemory} | Platform: ${info.platform}\n`;

  fs.appendFile("system-info.txt", log, (err) => {
    if (err) {
      console.log("Error writing log");
    } else {
      console.log("System info logged...");
    }
  });
}, 5000);

