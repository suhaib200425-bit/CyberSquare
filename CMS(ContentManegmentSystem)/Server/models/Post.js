const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },

  slug: {
    type: String,
    unique: true,
    lowercase: true
  },

  banner:{
    type: String,
    required: true,
    default:null
  },

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category", // 👈 reference
    required: true
  },

  status: {
    type: String,
    enum: ["Draft", "Published"],
    default: "draft"
  },

  views: {
    type: Number,
    default: 190
  },

  excerpt: {
    type: String,
    trim: true
  },

  content: {
    type: String,
    required: true
  }

}, { timestamps: true });

module.exports = mongoose.model("Post", PostSchema);