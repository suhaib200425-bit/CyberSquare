const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },

  slug: {
    type: String,
    required: true,
    trim: true
  },

  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    default: null
  },
  description: {
    type: String,
    default: null
  },

  theme: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TemeTemplate",
    default: "6a0755c612155635815daaea"
  },
  
    auther: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
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