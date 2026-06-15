import express from "express";
import { isAuthenticated } from "../middleware/authMiddleware.js";

import {
  createItem,
  getAllItems,
  getSingleItem,
  updateItem,
  deleteItem,
  getMyItems,
} from "../controllers/itemController.js";

const router = express.Router();

router.get("/my-items", isAuthenticated, getMyItems);

router.post("/items", isAuthenticated, createItem);

router.get("/items", getAllItems);

router.get("/items/:id", getSingleItem);

router.put("/items/:id", isAuthenticated, updateItem);

router.delete("/items/:id", isAuthenticated, deleteItem);

export default router;
