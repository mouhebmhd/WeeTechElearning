const { MongoClient } = require("mongodb");
const databaseUrl = process.env.databaseLink;
const databaseOptions = { useNewUrlParser: true, useUnifiedTopology: true };
const mongoClient = new MongoClient(databaseUrl, databaseOptions);

const connectToDatabase = async () => {
    try {
        await mongoClient.connect();
        console.log("Successfully Connected to MongoDB Atlas!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports.connectToDatabase = connectToDatabase;
