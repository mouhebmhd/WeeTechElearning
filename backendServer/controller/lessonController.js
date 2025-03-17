const Lesson=require("../schemas/lessonSchema");
// 🔍 Search: Retrieves lessons by the chapter ID
const getLessonsByChapterId = async (req, res) => {
    try {
        const lessons = await Lesson.find({ chapterId: req.params.chapterId });

        if (!lessons || lessons.length === 0) {
            return res.status(404).json({ error: "No lessons found for this chapter" });
        }

        res.status(200).json(lessons);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// 🔍 Search: Retrieves a lesson by its unique ID
const getLessonById = async (req, res) => {
    try {
        const lesson = await Lesson.findById(req.params.id);

        if (!lesson) {
            return res.status(404).json({ error: "Lesson not found" });
        }

        res.status(200).json(lesson);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// 📜 Fetch: Retrieves all lessons from the database
const getAllLessons = async (req, res) => {
    try {
        const lessons = await Lesson.find();
        res.status(200).json(lessons);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// ❌ Delete: Deletes a lesson by its unique ID
const deleteLesson = async (req, res) => {
    try {
        const lesson = await Lesson.findByIdAndDelete(req.params.id);

        if (!lesson) {
            return res.status(404).json({ error: "Lesson not found" });
        }

        res.status(200).json({ message: "Lesson deleted successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// 🔄 Update: Updates an existing lesson with new data
const updateLesson = async (req, res) => {
    try {
        const { title, content, chapterId } = req.body;

        const lesson = await Lesson.findByIdAndUpdate(
            req.params.id,
            { title, content, chapterId },
            { new: true, runValidators: true }
        );

        if (!lesson) {
            return res.status(404).json({ error: "Lesson not found" });
        }

        res.status(200).json(lesson);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
module.exports={
    getLessonsByChapterId,
    getLessonById,
    getAllLessons,
    deleteLesson,
    updateLesson
}