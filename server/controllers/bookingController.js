import transporter from "../configs/nodemailer.js";
import Booking from"../models/booking.js";
import Room from "../models/room.js";
import Room1 from "../models/room1.js";



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
    if (!room1Data) {
       return res.status(404).json({
       success: false,
       message: "Room not found"
    });
}

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
// ✅ STRIPE PAYMENT
// ===============================
export const stripePayment = async (req, res) => {
  try {

    const { bookingId } = req.body;

    const booking = await Booking.findById(bookingId);

    const room1Data = await Room1.findById(booking.room1).populate("room");

    const totalPrice = booking.totalPrice;

    const { origin } = req.headers;

    const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY);

    const line_items = [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: room1Data.roomType,
          },
          unit_amount: totalPrice * 100,
        },
        quantity: 1,
      },
    ];

    const session = await stripeInstance.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: `${origin}/loader/my-bookings`,
      cancel_url: `${origin}/my-bookings`,
      metadata: {
        bookingId,
      },
    });

    res.json({ success: true, url: session.url });

  } catch (error) {
    res.json({ success: false, message: "Payment Failed" });
  }
};