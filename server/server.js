import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhooks from "./controllers/clerkWebhooks.js";
import userRouter from "./routes/userRoutes.js";
import roomRouter from "./routes/roomRoutes.js";
import room1Router from "./routes/room1Routes.js";
import bookingRouter from "./routes/bookingRoutes.js";
import connectCloudinary from "./configs/cloudinary.js";

// connect database & cloudinary
connectDB();
connectCloudinary();

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

// webhook route
app.use("/api/clerk", clerkWebhooks);

// test route
app.get("/", (req, res) => res.send("API is working"));

// routes
app.use("/api/user", userRouter);
app.use("/api/room", roomRouter);
app.use("/api/room1", room1Router);
app.use("/api/bookings", bookingRouter);

// server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);