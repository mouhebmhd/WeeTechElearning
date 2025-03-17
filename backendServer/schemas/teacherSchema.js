const mongoose = require("mongoose");
const User = require("./userModel");

const teacherSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    specialty: {
        type: String,
        required: true
    },
    teachingLevel: {
        type: String,
        required: true
    },
    yearsOfExperience: {
        type: Number,
        required: true
    }
});

const Teacher = mongoose.model("Teacher", teacherSchema);
module.exports = Teacher;
