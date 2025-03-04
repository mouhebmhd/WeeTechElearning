const {Category} = require("../schemas/categorySchema");

// 🔍 Search: Retrieves a category by its name
const getCategoryByName = async (req, res) => {
    try {
        const category = await Category.findOne({ name: req.params.name });

        if (!category) {
            return res.status(404).json({ error: "Category not found" });
        }

        res.status(200).json(category);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// 🔍 Search: Retrieves a category by its unique ID
const getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);

        if (!category) {
            return res.status(404).json({ error: "Category not found" });
        }

        res.status(200).json(category);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// 📜 Fetch: Retrieves all categories from the database
const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// ❌ Delete: Deletes a category by its unique ID
const deleteCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);

        if (!category) {
            return res.status(404).json({ error: "Category not found" });
        }

        res.status(200).json({ message: "Category deleted successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// 🔄 Update: Updates an existing category with new data
const updateCategory = async (req, res) => {
    try {
        const { name, description } = req.body;

        const category = await Category.findByIdAndUpdate(
            req.params.id,
            { name, description },
            { new: true, runValidators: true }
        );

        if (!category) {
            return res.status(404).json({ error: "Category not found" });
        }

        res.status(200).json(category);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
module.exports={
    getCategoryByName,
    getCategoryById,
    getAllCategories,
    deleteCategory,
    updateCategory
}