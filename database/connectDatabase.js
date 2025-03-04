const mongoose = require("mongoose");

const databaseUrl = process.env.databaseLink || "mongodb://127.0.0.1:27017/weeTech";

const connectToDatabase = async () => {
    try {
        await mongoose.connect(databaseUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000, // Increase timeout to prevent issues
        });
        console.log("Successfully Connected to MongoDB!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Stop the app if connection fails
    }
};

module.exports = connectToDatabase;
