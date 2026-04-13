const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  lastLogin: Date,
  lastLogout: Date,
  lastActive: Date
});

// Login track
userSchema.pre("save", function (next) {
  if (this.isModified("lastLogin")) {
    this.lastActive = new Date();
  }
  next();
});

// Auto update last active
userSchema.pre("findOneAndUpdate", function (next) {
  this.set({ lastActive: new Date() });
  next();
});

module.exports = mongoose.model("User", userSchema);