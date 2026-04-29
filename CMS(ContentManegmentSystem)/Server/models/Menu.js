const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    slug: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    page: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Page",
        default: null
    }

}, { timestamps: true });

module.exports = mongoose.model("Menu", MenuSchema);