const fs = require("fs");
const zlib = require("zlib");
const path = require("path");

const inputFile = path.join(__dirname, "input.txt");
const outputFile = path.join(__dirname, "input.txt.gz");

// Create read & write streams
const readStream = fs.createReadStream(inputFile);
const writeStream = fs.createWriteStream(outputFile);

// Create gzip stream
const gzip = zlib.createGzip();

// Pipe streams (chunk by chunk)
readStream
  .pipe(gzip)
  .pipe(writeStream)
  .on("finish", () => {
    console.log("File compressed successfully");
  })
  .on("error", (err) => {
    console.log("Compression error:", err.message);
  });
