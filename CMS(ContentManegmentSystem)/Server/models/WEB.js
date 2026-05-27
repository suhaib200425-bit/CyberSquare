const mongoose = require("mongoose");

const WebSchema = new mongoose.Schema({
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // 👈 reference
        required: true,
        default: null
    },
    website: {
        type: String,
        required: true,
        unique:true,
        lowercase: true,
        trim: true
    },

    navbar: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "NavbarTemplate", // 👈 reference
        required: true,
        default: "69f2fdfb99b3015839dc090c"
    },

    theme: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TemeTemplate", // 👈 reference
        required: true,
        default: "6a0755c612155635815daaea"
    },

    footer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FooterTemplate", // 👈 reference
        required: true,
        default: "6a06fac82a55d0533fe65cea"
    }
});

module.exports = mongoose.model("WEB", WebSchema);