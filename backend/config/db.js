import mongoose from "mongoose";

const connectDB = async () => {
  console.log("🔄 Trying to connect MongoDB...");

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB Connected");
    console.log("Host:", conn.connection.host);
  } catch (error) {
    console.error("❌ MongoDB Error:");
    console.error(error.message);
  }
};

export default connectDB;