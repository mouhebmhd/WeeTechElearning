const express = require("express");
const router = express.Router();
const { 
    getSubscriptionById, 
    getSubscriptionsByCourseId, 
    getSubscriptionsByStudentId, 
    getAllSubscriptions, 
    createSubscription, 
    deleteSubscription, 
    updateSubscription 
} = require("../controller/subscriptionController");

// 🔍 Get subscription by ID
router.get("/subscriptions/getById/:id", getSubscriptionById);

// 🔍 Get subscriptions by course ID
router.get("/subscriptions/getByCourseId/:courseId", getSubscriptionsByCourseId);

// 🔍 Get subscriptions by student ID
router.get("/subscriptions/getByStudentId/:studentId", getSubscriptionsByStudentId);

// 📜 Get all subscriptions
router.get("/subscriptions/getAll", getAllSubscriptions);

// ➕ Create a new subscription
router.post("/subscriptions", createSubscription);

// 🔄 Update a subscription by ID
router.put("/subscriptions/updateOne/:id", updateSubscription);

// ❌ Delete a subscription by ID
router.delete("/subscriptions/deleteOne/:id", deleteSubscription);

module.exports = router;
