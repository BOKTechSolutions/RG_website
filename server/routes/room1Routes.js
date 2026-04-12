import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import { protect } from "../middleware/authMiddleware.js";
import {
  createRoom1,
  getOwnerRoom1,
  getRoom1,
  toggleRoom1Availability
} from "../controllers/room1Controller.js";

const room1Router = express.Router();

room1Router.post('/', upload.array("images", 4), protect, createRoom1);
room1Router.get('/', getRoom1);
room1Router.get('/owner', protect, getOwnerRoom1);
room1Router.post('/toggle-availability', protect, toggleRoom1Availability);

// ✅ THIS WAS MISSING (IMPORTANT)
export default room1Router;