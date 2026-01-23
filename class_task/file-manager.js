const fs = require("fs");

const args = process.argv.slice(2);
const command = args[0];

function handleError(err) {
  if (err.code === "ENOENT") {
    console.log("Error: File or directory not found");
  } else if (err.code === "EACCES") {
    console.log("Error: Permission denied");
  } else {
    console.log("Error:", err.message);
  }
}

switch (command) {
  case "read": {
    const file = args[1];
    fs.readFile(file, "utf8", (err, data) => {
      if (err) return handleError(err);
      console.log(data);
    });
    break;
  }

  case "write": {
    const file = args[1];
    const content = args.slice(2).join(" ");
    fs.writeFile(file, content, (err) => {
      if (err) return handleError(err);
      console.log("File written successfully");
    });
    break;
  }

  case "append": {
    const file = args[1];
    const content = args.slice(2).join(" ");
    fs.appendFile(file, content + "\n", (err) => {
      if (err) return handleError(err);
      console.log("Content appended successfully");
    });
    break;
  }

  case "copy": {
    const src = args[1];
    const dest = args[2];
    fs.copyFile(src, dest, (err) => {
      if (err) return handleError(err);
      console.log("File copied successfully");
    });
    break;
  }

  case "delete": {
    const file = args[1];
    fs.unlink(file, (err) => {
      if (err) return handleError(err);
      console.log("File deleted successfully");
    });
    break;
  }

  case "list": {
    const dir = args[1] || ".";
    fs.readdir(dir, (err, files) => {
      if (err) return handleError(err);
      files.forEach((file) => console.log(file));
    });
    break;
  }

  default:
    console.log(`
Usage:
node file-manager.js read <file>
node file-manager.js write <file> <content>
node file-manager.js append <file> <content>
node file-manager.js copy <source> <destination>
node file-manager.js delete <file>
node file-manager.js list <directory>
`);
}
