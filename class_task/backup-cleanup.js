const fs = require("fs").promises;
const path = require("path");

const SOURCE_DIR = path.join(__dirname, "uploads");
const BACKUP_DIR = path.join(__dirname, "backup");
const LOG_FILE = path.join(__dirname, "backup.log");

const DAYS_7 = 7 * 24 * 60 * 60 * 1000;

async function log(message) {
  const entry = `${new Date().toLocaleString()} | ${message}\n`;
  await fs.appendFile(LOG_FILE, entry);
}

async function ensureDir(dir) {
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir);
    await log(`Created directory: ${dir}`);
  }
}

async function backupAndCleanup() {
  try {
    await ensureDir(SOURCE_DIR);
    await ensureDir(BACKUP_DIR);

    const files = await fs.readdir(SOURCE_DIR);

    for (const file of files) {
      const filePath = path.join(SOURCE_DIR, file);
      const stats = await fs.stat(filePath);

      const now = Date.now();

      // Backup file
      const timestamp = Date.now();
      const backupName = `${timestamp}-${file}`;
      const backupPath = path.join(BACKUP_DIR, backupName);

      await fs.copyFile(filePath, backupPath);
      await log(`Backed up: ${file} -> ${backupName}`);

      // Delete files older than 7 days
      if (now - stats.mtimeMs > DAYS_7) {
        await fs.unlink(filePath);
        await log(`Deleted old file: ${file}`);
      }
    }

    console.log("Backup & cleanup completed successfully");
  } catch (err) {
    await log(`ERROR: ${err.message}`);
    console.log("Error occurred:", err.message);
  }
}

backupAndCleanup();
