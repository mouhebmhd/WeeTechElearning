const express = require("express");
const router = express.Router();
const {
    createAttachment,
    getAllAttachments,
    getAttachmentById,
    getAttachmentsForLesson,
    updateAttachment,
    deleteAttachment
} = require("../controller/attachementController"); // Adjust path if needed

// ✨ Create a new attachment
router.post("/attachements/createOne", createAttachment);

// 🔍 Get all attachments
router.get("/attachements/getAll", getAllAttachments);

// 🔍 Get a single attachment by ID
router.get("/attachements/getById/:id", getAttachmentById);

// 🔍 Get attachments for a specific lesson
router.get("/attachements/getByLesson/:lessonId", getAttachmentsForLesson);

// 🔄 Update an attachment
router.put("/attachements/updateOne/:id", updateAttachment);

// ❌ Delete an attachment
router.delete("/attachements/deleteOne/:id", deleteAttachment);

module.exports = router;
