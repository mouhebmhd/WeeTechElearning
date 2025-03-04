const {Attachment} = require("../schemas/Attachment");

// ✨ Add: Creates a new attachment and saves it to the database
const createAttachment = async (req, res) => {
    try {
        const { name, type, url, lessonId } = req.body;
        
        const Attachment = new Attachment({
            name,
            type,
            url,
            lessonId
        });

        await Attachment.save();
        res.status(201).json(Attachment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// 🔍 Fetch: Retrieves all attachments from the database
const getAllAttachments = async (req, res) => {
    try {
        const attachments = await Attachment.find();
        res.status(200).json(attachments);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// 🔍 Fetch: Retrieves an  attachment with a specific Id 
const getAttachmentById = async (req, res) => {
    try {
        const attachment = await Attachment.findById(req.params.id);

        if (!attachment) {
            return res.status(404).json({ error: "Attachment not found" });
        }

        res.status(200).json(attachment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// 🔍 Search: Retrieves attachments associated with a specific lesson
const getAttachmentsForLesson = async (req, res) => {
    try {
        const lessonId = req.params.lessonId;
        
        // Find all attachments related to the specific lesson
        const attachments = await Attachment.find({ lessonId });

        if (!attachments || attachments.length === 0) {
            return res.status(404).json({ error: "No attachments found for this lesson" });
        }

        res.status(200).json(attachments);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// 🔄 Update: Updates an existing attachment with new data
const updateAttachment = async (req, res) => {
    try {
        const { name, type, url, lessonId } = req.body;
        
        const attachment = await Attachment.findByIdAndUpdate(
            req.params.id,
            { name, type, url, lessonId },
            { new: true, runValidators: true }
        );

        if (!attachment) {
            return res.status(404).json({ error: "Attachment not found" });
        }

        res.status(200).json(attachment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// ❌ Delete: Deletes an attachment from the database
const deleteAttachment = async (req, res) => {
    try {
        const attachment = await Attachment.findByIdAndDelete(req.params.id);

        if (!attachment) {
            return res.status(404).json({ error: "Attachment not found" });
        }

        res.status(200).json({ message: "Attachment deleted successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
module.exports={
    createAttachment,
    getAllAttachments,
    getAttachmentById,
    getAttachmentsForLesson,
    updateAttachment,
    deleteAttachment
}