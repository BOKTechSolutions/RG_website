import transporter from "../configs/nodemailer.js";
import Booking from"../models/booking.js";
import Room from "../models/room.js";
import Room1 from "../models/room1.js";
import axios from "axios";


// ===============================
// ✅ CHECK AVAILABILITY FUNCTION
// ===============================
const checkAvailability = async ({ checkInDate, checkOutDate, room1 }) => {
  try {
    const bookings = await Booking.find({
      room1,
      checkInDate: { $lte: checkOutDate },
      checkOutDate: { $gte: checkInDate },
    });

    return bookings.length === 0;

  } catch (error) {
    console.error(error.message);
    return false;
  }
};


// ===============================
// ✅ CHECK AVAILABILITY API
// ===============================
export const checkAvailabilityAPI = async (req, res) => {
  try {
    const { room1, checkInDate, checkOutDate } = req.body;

    const isAvailable = await checkAvailability({
      checkInDate,
      checkOutDate,
      room1
    });

    res.json({ success: true, isAvailable });

  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};


// ===============================
// ✅ CREATE BOOKING
// ===============================
export const createBooking = async (req, res) => {
  try {

    const { room1, checkInDate, checkOutDate, guests } = req.body;
    const user = req.user._id;

    // 🔍 Check availability
    const isAvailable = await checkAvailability({
      checkInDate,
      checkOutDate,
      room1,
    });

    if (!isAvailable) {
      return res.json({ success: false, message: "Room is not available" });
    }

    // 🔍 Get room1 data
    const room1Data = await Room1.findById(room1).populate("room");

    // price comes from room1 now
    let totalPrice = room1Data.pricePerNight;

    // 🧮 Calculate nights
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const nights = Math.ceil((checkOut - checkIn) / (1000 * 3600 * 24));

    totalPrice *= nights;

    // 🏨 Create booking
    const booking = await Booking.create({
      user,
      room: room1Data.room._id, // parent hotel
      room1,
      guests: Number(guests),
      checkInDate,
      checkOutDate,
      totalPrice,
    });

    // 📧 Send email
    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: req.user.email,
      subject: "Booking Details",
      html: `
        <h2>Your Booking Details</h2>
        <p>Dear ${req.user.username},</p>
        <ul>
          <li><strong>Booking ID:</strong> ${booking._id}</li>
          <li><strong>Room Type:</strong> ${room1Data.roomType}</li>
          <li><strong>Date:</strong> ${new Date(checkInDate).toDateString()}</li>
          <li><strong>Total Amount:</strong> ${booking.totalPrice}</li>
        </ul>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "Booking created successfully" });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Failed to create booking" });
  }
};


// ===============================
// ✅ GET USER BOOKINGS
// ===============================
export const getUserBookings = async (req, res) => {
  try {
    const user = req.user._id;

    const bookings = await Booking.find({ user })
      .populate("room1 room user")
      .sort({ createdAt: -1 });

    res.json({ success: true, bookings });

  } catch (error) {
    res.json({ success: false, message: "Failed to fetch bookings" });
  }
};


// ===============================
// ✅ GET OWNER BOOKINGS (DASHBOARD)
// ===============================
export const getOwnerBookings = async (req, res) => {
  try {
    const room = await Room.findOne({ owner: req.auth.userId });

    if (!room) {
      return res.json({ success: false, message: "No hotel found" });
    }

    const bookings = await Booking.find({ room: room._id })
      .populate("room1 room user")
      .sort({ createdAt: -1 });

    const totalBookings = bookings.length;

    const totalRevenue = bookings.reduce(
      (acc, booking) => acc + booking.totalPrice,
      0
    );

    res.json({
      success: true,
      dashboardData: { totalBookings, totalRevenue, bookings }
    });

  } catch (error) {
    res.json({ success: false, message: "Failed to fetch bookings" });
  }
};


// ===============================
// PAYSTACK PAYMENT
// ===============================
export const paystackPayment = async (req, res) => {
  try {
    const { bookingId } = req.body;

    const booking = await Booking.findById(bookingId);

    if (!booking) {
      return res.json({
        success: false,
        message: "Booking not found",
      });
    }

    const room1Data = await Room1.findById(booking.room1);

    const response = await axios.post(
      "https://api.paystack.co/transaction/initialize",
      {
        email: req.user.email,
        amount: booking.totalPrice * 100, // pesewas
        callback_url: `${process.env.CLIENT_URL}/payment-success`,
        metadata: {
          bookingId: booking._id,
          roomType: room1Data.roomType,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return res.json({
      success: true,
      authorization_url: response.data.data.authorization_url,
    });
  } catch (error) {
    console.log(error.response?.data || error.message);

    return res.json({
      success: false,
      message: "Unable to initialize payment",
    });
  }
};

// ===============================
// VERIFY PAYSTACK PAYMENT
// ===============================
export const verifyPaystackPayment = async (req, res) => {
  try {
    const { reference } = req.params;

    const response = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      }
    );

    const payment = response.data.data;

    if (payment.status === "success") {

      const bookingId = payment.metadata.bookingId;

      await Booking.findByIdAndUpdate(bookingId, {
        isPaid: true,
      });

      return res.json({
        success: true,
        message: "Payment verified",
      });
    }

    return res.json({
      success: false,
      message: "Payment not successful",
    });

  } catch (error) {

    console.log(error.response?.data || error.message);

    return res.json({
      success: false,
      message: "Verification failed",
    });
  }
};