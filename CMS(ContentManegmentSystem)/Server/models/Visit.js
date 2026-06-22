const mongoose = require("mongoose");

const visitSchema = new mongoose.Schema({
  visiter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // 👈 reference
    required: true,
    default: null
  },

  web: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "WEB", // 👈 reference
    required: true,
    default: null
  },

  visitedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Visit", visitSchema);