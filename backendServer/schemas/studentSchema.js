const mongoose = require("mongoose");
const User = require("./userModel");

const studentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    educationLevel: {
        type: String,
        required: true
    },
    school: {
        type: String,
        required: true
    },
    totalPoints: [{
        type: Number,
        required:true
    }]
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
