const mongoose = require("mongoose");

const propseSchema = new mongoose.Schema({
    label: { type: String, require: true },
    type: { type: String, require: true },
    value: { type: String, require: true },
}, { _id: false });


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
        unique: true,
        lowercase: true,
        trim: true
    },

    navbar: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "NavbarTemplate", // 👈 reference
        required: true,
        default: "69f2fdfb99b3015839dc090c"
    },
    navbarProps: {
        type: Map,
        of: propseSchema
    },

    theme: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TemeTemplate", // 👈 reference
        required: true,
        default: null
    },

    auth: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AuthTemplate", // 👈 reference
        required: true,
        default: null
    },

    footer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FooterTemplate", // 👈 reference
        required: true,
        default: null
    }
});

module.exports = mongoose.model("WEB", WebSchema);