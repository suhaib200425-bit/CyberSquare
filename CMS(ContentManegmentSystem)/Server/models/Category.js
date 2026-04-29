const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },

  slug: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },

  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    default: null
  },
  description:{
    type: String,
    default: null
  },

  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post"
    }
  ]

}, { timestamps: true });

module.exports = mongoose.model("Category", CategorySchema);