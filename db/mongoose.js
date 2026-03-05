import mongoose from "mongoose";

async function connectDB() {
  try {

    const connect = await mongoose.connect(process.env.MONGO_URL);

    console.log("✅ MongoDB Connected");

    return connect;

  } catch (error) {

    throw new Error("MongoDB connection failed: " + error.message);

  }
}

export default connectDB;