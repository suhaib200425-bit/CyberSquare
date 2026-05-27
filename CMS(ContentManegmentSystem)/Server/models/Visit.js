const mongoose = require("mongoose");

const visitSchema = new mongoose.Schema({
  ip: {
    type: String,
    required: true
  },

  web: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // 👈 reference
    required: true,
    default: null
  },

  visitedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Visit", visitSchema);