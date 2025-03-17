const {Student}=require("../schemas/studentSchema");
// 🔍 Search: Retrieves a student by their unique ID
const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id).populate('user');

        if (!student) {
            return res.status(404).json({ error: "Student not found" });
        }

        res.status(200).json(student);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// 🔍 Search: Retrieves a student by the user ID (foreign key reference)
const getStudentByUserId = async (req, res) => {
    try {
        const student = await Student.findOne({ user: req.params.userId }).populate('user');

        if (!student) {
            return res.status(404).json({ error: "Student not found" });
        }

        res.status(200).json(student);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// 📜 Fetch: Retrieves all students from the database
const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find().populate('user');
        res.status(200).json(students);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// ➕ Add: Creates a new student and saves them to the database
const createStudent = async (req, res) => {
    try {
        const { user, educationLevel, school, totalPoints } = req.body;

        const newStudent = new Student({
            user,
            educationLevel,
            school,
            totalPoints
        });

        await newStudent.save();

        res.status(201).json({ message: "Student created successfully", student: newStudent });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// 🔄 Update: Updates an existing student's information based on their ID
const updateStudent = async (req, res) => {
    try {
        const { educationLevel, school, totalPoints } = req.body;

        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id,
            { educationLevel, school, totalPoints },
            { new: true, runValidators: true }
        );

        if (!updatedStudent) {
            return res.status(404).json({ error: "Student not found" });
        }

        res.status(200).json(updatedStudent);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// ❌ Delete: Deletes a student by their unique ID
const deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);

        if (!student) {
            return res.status(404).json({ error: "Student not found" });
        }

        res.status(200).json({ message: "Student deleted successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
module.exports={
    getStudentById,
    getStudentByUserId,
    getAllStudents,
    createStudent,
    updateStudent,
    deleteStudent,
}
