const {Teacher} =require("../schemas/teacherSchema");
// 🔍 Search: Retrieves a teacher by their unique ID
const getTeacherById = async (req, res) => {
    try {
        const teacher = await Teacher.findById(req.params.id).populate('user');

        if (!teacher) {
            return res.status(404).json({ error: "Teacher not found" });
        }

        res.status(200).json(teacher);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// 🔍 Search: Retrieves a teacher by the associated user's unique ID
const getTeacherByUserId = async (req, res) => {
    try {
        const teacher = await Teacher.findOne({ user: req.params.userId }).populate('user');

        if (!teacher) {
            return res.status(404).json({ error: "Teacher not found" });
        }

        res.status(200).json(teacher);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// 📜 Fetch: Retrieves all teachers from the database
const getAllTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find().populate('user');
        res.status(200).json(teachers);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// ➕ Add: Creates a new teacher profile and saves it to the database
const createTeacher = async (req, res) => {
    try {
        const { user, specialty, teachingLevel, yearsOfExperience } = req.body;

        const newTeacher = new Teacher({
            user,
            specialty,
            teachingLevel,
            yearsOfExperience
        });

        await newTeacher.save();

        res.status(201).json({ message: "Teacher created successfully", teacher: newTeacher });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// 🔄 Update: Updates an existing teacher's information (specialty, teaching level, years of experience)
const updateTeacher = async (req, res) => {
    try {
        const { specialty, teachingLevel, yearsOfExperience } = req.body;

        const updatedTeacher = await Teacher.findByIdAndUpdate(
            req.params.id,
            { specialty, teachingLevel, yearsOfExperience },
            { new: true, runValidators: true }
        );

        if (!updatedTeacher) {
            return res.status(404).json({ error: "Teacher not found" });
        }

        res.status(200).json(updatedTeacher);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// ❌ Delete: Deletes a teacher by their unique ID
const deleteTeacher = async (req, res) => {
    try {
        const teacher = await Teacher.findByIdAndDelete(req.params.id);

        if (!teacher) {
            return res.status(404).json({ error: "Teacher not found" });
        }

        res.status(200).json({ message: "Teacher deleted successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
module.exports=
{
    getTeacherById,
    getTeacherByUserId,
    getAllTeachers,
    createTeacher,
    updateTeacher,
    deleteTeacher
}
