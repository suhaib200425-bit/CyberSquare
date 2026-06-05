const mongoose = require("mongoose");

const propseSchema = new mongoose.Schema({
    label: { type: String, require: true },
    type: { type: String, require: true },
    value: { type: String, require: true },
}, { _id: false });

const AuthTemplateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    template: {
        type: String,
        required: true
    },

    auther: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // 👈 reference
        default: null
    },
    
    props: {
        required: true,
        type: Map,
        of: propseSchema
    },

    imageModel: {
        type: String,
        required: true
    },

    checked: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

module.exports = mongoose.model("AuthTemplate", AuthTemplateSchema)