const fs = require("fs");

function logMessage(message) {
  const timestamp = new Date().toLocaleString();
  const logEntry = `${timestamp} | ${message}\n`;

  fs.appendFile("app.log", logEntry, (err) => {
    if (err) {
      console.log("Error writing log:", err.message);
    } else {
      console.log("Log saved successfully");
    }
  });
}
logMessage("Application started");
logMessage("User logged in");
logMessage("An error occurred");
