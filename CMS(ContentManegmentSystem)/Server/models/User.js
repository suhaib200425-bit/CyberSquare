const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },

    web: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "WEB", // 👈 reference
        default: null
    },

    password: {
        type: String,
        required: true,
        minlength: 6
    },

    isVerified: {
        type: Boolean,
        default: false
    },

    role: {
        type: String,
        enum: ["user", "admin", "editor"],
        default: "user",
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("User", userSchema);
