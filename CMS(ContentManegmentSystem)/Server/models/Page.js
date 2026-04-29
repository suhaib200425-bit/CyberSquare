const mongoose = require("mongoose");

const ValueSchema = new mongoose.Schema({
  label: String,
  type: String,
  value: mongoose.Schema.Types.Mixed
}, { _id: false });

const SectionSchema = new mongoose.Schema({
  name: String,
  template: String,
  values: {
    type: Map,
    of: ValueSchema
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