
import express from "express";
import { protect } from "../middleware/authmiddleware.js";
import { getUserData } from "../controllers/usercontroller.js";
const userRouter =express.Router();

userRouter.get('/',protect,getUserData);


export default userRouter;