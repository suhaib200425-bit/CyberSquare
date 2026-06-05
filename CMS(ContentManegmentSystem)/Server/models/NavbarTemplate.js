const mongoose = require("mongoose");


const propseSchema = new mongoose.Schema({
    label: { type: String, require: true },
    type: { type: String, require: true },
    value: { type: String, require: true },
}, { _id: false });



const NavbarTemplateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    auther: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // 👈 reference
        default: null
    },

    navbarProps: {
        type: Map,
        of: propseSchema
    },

    navbar: {
        type: String,
        required: true
    },

    checked: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

module.exports = mongoose.model("NavbarTemplate", NavbarTemplateSchema)