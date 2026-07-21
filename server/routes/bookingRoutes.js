import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  checkAvailabilityAPI,
  createBooking,
  getOwnerBookings,
  getUserBookings,
  paystackPayment,
  verifyPaystackPayment,
} from "../controllers/bookingController.js";

const bookingRouter = express.Router();

bookingRouter.post("/check-availability", checkAvailabilityAPI);
bookingRouter.post("/book", protect, createBooking);
bookingRouter.get("/user", protect, getUserBookings);
bookingRouter.get("/room1", protect, getOwnerBookings);

// Paystack
bookingRouter.post("/paystack-payment", protect, paystackPayment);
bookingRouter.get("/verify/:reference", protect, verifyPaystackPayment);

export default bookingRouter;