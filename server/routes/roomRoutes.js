  

import express from "express";
import { protect } from "../middleware/authmiddleware.js";
import { registerRoom } from "../controllers/roomController.js";

const roomRouter = express.Router();

roomRouter.post('/', protect, registerRoom);

export default roomRouter;