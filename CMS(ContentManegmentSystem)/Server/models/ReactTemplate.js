const mongoose = require("mongoose");


const propseSchema = new mongoose.Schema({
    label: { type: String, require: true },
    type: { type: String, require: true },
    value: { type: String, require: true },
}, { _id: false });


const reactTemplateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    template: {
        type: String,
        required: true
    },

    props: {
        required: true,
        type: Map,
        of: propseSchema
    }

}, { timestamps: true });

module.exports = mongoose.model("ReactTemplate", reactTemplateSchema)