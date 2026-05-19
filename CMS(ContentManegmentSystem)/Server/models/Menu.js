const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },

    slug: {
        type: String,
        required: true,
        trim: true
    },

    page: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Page",
        default: null
    },
  theme: {
    type: mongoose.Schema.Types.ObjectId,
        ref: "TemeTemplate",
    default: "6a0755c612155635815daaea"
  },

}, { timestamps: true });

module.exports = mongoose.model("Menu", MenuSchema);