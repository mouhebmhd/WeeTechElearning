const {Subscription}=require("../schemas/subscriptionSchema");
// 🔍 Search: Retrieves a specific subscription by its unique ID
const getSubscriptionById = async (req, res) => {
    try {
        const subscription = await Subscription.findById(req.params.id);

        if (!subscription) {
            return res.status(404).json({ error: "Subscription not found" });
        }

        res.status(200).json(subscription);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// 🔍 Search: Retrieves all subscriptions associated with a specific course ID
const getSubscriptionsByCourseId = async (req, res) => {
    try {
        const subscriptions = await Subscription.find({ courseId: req.params.courseId });

        if (!subscriptions || subscriptions.length === 0) {
            return res.status(404).json({ error: "No subscriptions found for this course" });
        }

        res.status(200).json(subscriptions);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// 🔍 Search: Retrieves all subscriptions associated with a specific student ID
const getSubscriptionsByStudentId = async (req, res) => {
    try {
        const subscriptions = await Subscription.find({ studentId: req.params.studentId });

        if (!subscriptions || subscriptions.length === 0) {
            return res.status(404).json({ error: "No subscriptions found for this student" });
        }

        res.status(200).json(subscriptions);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// 📜 Fetch: Retrieves all subscriptions from the database
const getAllSubscriptions = async (req, res) => {
    try {
        const subscriptions = await Subscription.find();
        res.status(200).json(subscriptions);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// ➕ Add: Creates a new subscription and saves it to the database
const createSubscription = async (req, res) => {
    try {
        const { courseId, studentId,courseProgress } = req.body;

        const newSubscription = new Subscription({
            courseId,
            studentId,
            courseProgress
        });

        await newSubscription.save();

        res.status(201).json({ message: "Subscription created successfully", subscription: newSubscription });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// ❌ Delete: Deletes a subscription by its unique ID
const deleteSubscription = async (req, res) => {
    try {
        const subscription = await Subscription.findByIdAndDelete(req.params.id);

        if (!subscription) {
            return res.status(404).json({ error: "Subscription not found" });
        }

        res.status(200).json({ message: "Subscription deleted successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// 🔄 Update: Updates an existing subscription with new data (e.g., course or student)
const updateSubscription = async (req, res) => {
    try {
        const { courseId, studentId } = req.body;

        const updatedSubscription = await Subscription.findByIdAndUpdate(
            req.params.id,
            { courseId, studentId,courseProgress },
            { new: true, runValidators: true }
        );

        if (!updatedSubscription) {
            return res.status(404).json({ error: "Subscription not found" });
        }

        res.status(200).json(updatedSubscription);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
module.exports=
{
    getSubscriptionById,
    getSubscriptionsByCourseId,
    getSubscriptionsByStudentId,
    getAllSubscriptions,
    createSubscription,
    deleteSubscription,
    updateSubscription,
}