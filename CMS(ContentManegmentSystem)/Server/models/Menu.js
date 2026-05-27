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

    auther: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null
    },

    page: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Page",
        default: null
    },
    theme: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TemeTemplate",
        default: null
    },

}, { timestamps: true });

module.exports = mongoose.model("Menu", MenuSchema);