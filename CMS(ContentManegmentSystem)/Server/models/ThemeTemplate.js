const mongoose = require("mongoose");

const Temetemplate = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    banner: {
        type: String,
        trim: true
    },
    checked: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        enum: ["Draft", "Published", "New"],
        default: "New"
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("TemeTemplate", Temetemplate);