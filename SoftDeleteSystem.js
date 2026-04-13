const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  deleted: { type: Boolean, default: false }
});

// Override delete
schema.pre("remove", function (next) {
  this.deleted = true;
  next();
});

// Filter deleted automatically
schema.pre(/^find/, function (next) {
  this.where({ deleted: false });
  next();
});

module.exports = mongoose.model("Item", schema);
doc.deleted = true;
await doc.save();