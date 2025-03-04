const mongoose = require("mongoose");

const attachmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['file', 'link']
    },
    url: {
        type: String,
        required: true
    },
    lessonId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lesson',
        required: true
    }
});

const Attachment = mongoose.model("Attachment", attachmentSchema);
module.exports = Attachment;