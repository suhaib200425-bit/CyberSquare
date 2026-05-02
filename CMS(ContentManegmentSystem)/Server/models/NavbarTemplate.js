const mongoose = require("mongoose");

const NavbarTemplateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    navbar: {
        type: String,
        required: true
    },

    checked:{
        type:Boolean,
        default:false
    }
}, { timestamps: true });

module.exports = mongoose.model("NavbarTemplate", NavbarTemplateSchema)