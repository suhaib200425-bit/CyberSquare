const mongoose = require("mongoose");


const propseSchema = new mongoose.Schema({
    label: { type: String, require: true },
    type: { type: String, require: true },
    value: { type: String, require: true },
}, { _id: false });



const FooterTemplateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    props: {
        type: Map,
        of: propseSchema
    },

    footer: {
        type: String,
        required: true
    },

    checked:{
        type:Boolean,
        default:false
    }
}, { timestamps: true });

module.exports = mongoose.model("FooterTemplate", FooterTemplateSchema)