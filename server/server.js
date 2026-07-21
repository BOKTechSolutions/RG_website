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
import dns from "dns";

// ==============================
// DNS FIX
// ==============================
dns.setServers(["8.8.8.8", "1.1.1.1"]);


// ==============================
// DATABASE & CLOUDINARY
// ==============================
connectDB();
connectCloudinary();


// ==============================
// EXPRESS APP
// ==============================
const app = express();


// ==============================
// CORS
// ==============================
app.use(
  cors({
    origin: [
      "https://devroyalgeorgegh.netlify.app",
      "http://localhost:5173"
    ],
    credentials: true,
  })
);


// ==============================
// CLERK WEBHOOK
// MUST COME BEFORE express.json()
// ==============================
app.use(
  "/api/clerk",
  express.raw({ type: "application/json" }),
  clerkWebhooks
);


// ==============================
// BODY PARSER
// ==============================
app.use(express.json());


// ==============================
// CLERK AUTH MIDDLEWARE
// ==============================
app.use(clerkMiddleware());


// ==============================
// TEST ROUTE
// ==============================
app.get("/", (req, res) => {
  res.send("API is working");
});


// ==============================
// API ROUTES
// ==============================
app.use("/api/user", userRouter);
app.use("/api/room", roomRouter);
app.use("/api/room1", room1Router);
app.use("/api/bookings", bookingRouter);


// ==============================
// SERVER
// ==============================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});