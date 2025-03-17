const express = require("express");
const router = express.Router();
const {
    getCategoryByName,
    getCategoryById,
    getAllCategories,
    deleteCategory,
    updateCategory
} = require("../controller/categoryController"); // Adjust the path if needed

// 📜 Get all categories
router.get("/categories/getAll", getAllCategories);

// 🔍 Get category by name
router.get("/categories/getByName/:name", getCategoryByName);

// 🔍 Get category by ID
router.get("/categories/getById/:id", getCategoryById);

// 🔄 Update category
router.put("/categories/updateOne/:id", updateCategory);

// ❌ Delete category
router.delete("/categories/deleteOne/:id", deleteCategory);

module.exports = router;
