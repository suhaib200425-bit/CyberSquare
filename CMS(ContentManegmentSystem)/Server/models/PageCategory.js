const mongoose = require("mongoose");

const PageCategorySchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
    
    }
}, { timestamps: true });

module.exports = mongoose.model("PageCategory", PageCategorySchema);