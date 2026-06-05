const mongoose = require("mongoose");


const propseSchema = new mongoose.Schema({
    label: { type: String, require: true },
    type: { type: String, require: true },
    value: { type: JSON, require: true },
}, { _id: false });


const reactTemplateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    template: {
        type: String,
        // required: true
    },
    banner: {
        type: String,
        default: null
    },
    pageRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PageCategory", // 👈 reference
        default: null
    },
    props: {
        // required: true,
        type: Map,
        of: propseSchema
    }

}, { timestamps: true });

module.exports = mongoose.model("ReactTemplate", reactTemplateSchema)