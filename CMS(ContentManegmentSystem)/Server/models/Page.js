const mongoose = require("mongoose");


const propseSchema = new mongoose.Schema({
    label: { type: String, require: true },
    type: { type: String, require: true },
    value: { type: String, require: true },
}, { _id: false });

const SectionSchema = new mongoose.Schema({
  name: String,
  template: String,
  props: {
    type: Map,
    of: propseSchema
  }
}, { _id: false });

const PageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  slug:{
    type: String,
    required: true
  },
  status:{
    type: String,
    enum: ["Draft", "Published"], // allowed values
    default: "draft",
    required: true
  },
  sections: [SectionSchema]
}, { timestamps: true });

module.exports = mongoose.model("Page", PageSchema);