const express = require("express");
const router = express.Router();
const {
    getCoursesByCategoryId,
    getCoursesByCreatorId,
    getCourseById,
    getAllCourses,
    deleteCourse,
    updateCourse
} = require("../controller/courseController");

// 🔍 Get courses by category ID
router.get("/courses/getByCategoryId/:categoryId", getCoursesByCategoryId);

// 🔍 Get courses by creator ID
router.get("/courses/getByCreatorId/:creatorId", getCoursesByCreatorId);

// 🔍 Get a single course by ID
router.get("/courses/getById/:id", getCourseById);

// 📜 Get all courses
router.get("/courses/getAll", getAllCourses);

// ❌ Delete a course by ID
router.delete("/courses/deleteOne/:id", deleteCourse);

// 🔄 Update a course by ID
router.put("/courses/updateOne/:id", updateCourse);

module.exports = router;
