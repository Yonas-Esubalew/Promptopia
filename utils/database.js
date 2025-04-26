import mongoose from "mongoose";

let isConnected = false; // Track the connection status
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/your_database_name"; // Replace with your MongoDB URI

export const connectToDB = async () => {
    mongoose.set("strictQuery", true);

    if (isConnected) {
        console.log("MongoDB is already connected");
        return;
    }

    try {   
        await mongoose.connect(MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        isConnected = true;
        console.log("MongoDB connected successfully");
    }
    catch (error) {
        console.error("MongoDB connection error:", error);
        throw new Error("Failed to connect to MongoDB");
    }
}


// KgpaJv7kxcETqgSE