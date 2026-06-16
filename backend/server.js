import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import itemRoutes from "./routes/itemRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

dotenv.config();

console.log("🚀 Server starting...");

const app = express();

// Database Connection
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/", userRoutes);
app.use("/", authRoutes);
app.use("/", itemRoutes);
app.use("/", uploadRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("CampusFind Backend Running 🚀");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
