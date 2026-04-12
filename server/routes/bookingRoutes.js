import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  checkAvailabilityAPI,
  createBooking,
  getOwnerBookings,
  getUserBookings,
  stripePayment,
} from "../controllers/bookingController.js";

const bookingRouter = express.Router();

bookingRouter.post("/check-availability", checkAvailabilityAPI);
bookingRouter.post("/book", protect, createBooking);
bookingRouter.get("/user", protect, getUserBookings);
bookingRouter.get("/room1", protect, getOwnerBookings);
bookingRouter.post("/stripe-payment", protect, stripePayment);

export default bookingRouter;