const mongoose = require("mongoose");
const User = require("./userModel");

const administratorSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    department: {
        type: String,
        required: true
    },
    accessLevel: {
        type: String,
        required: true
    }
});

const Administrator = mongoose.model("Administrator", administratorSchema);
module.exports = Administrator;
