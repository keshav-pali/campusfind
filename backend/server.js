import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

console.log("🚀 Server starting...");

const app = express();

// Database Connection
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/", userRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("CampusFind Backend Running 🚀");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});