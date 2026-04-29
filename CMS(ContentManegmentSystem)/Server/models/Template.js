const mongoose = require("mongoose");

const valueSchema = new mongoose.Schema({
    label: { type: String, require: true },
    type: { type: String, require: true },
    value: { type: String, require: true },
}, { _id: false });

const templateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    template: {
        type: String,
        required: true
    },

    values: {
        type: Map,
        of: valueSchema
    }

}, { timestamps: true });

module.exports = mongoose.model("Template", templateSchema)