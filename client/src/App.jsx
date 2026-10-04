
import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AllRooms from "./pages/AllRooms";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/Contact";
import About from "./pages/About";
import RoomDetails from "./pages/RoomDetails";
import MyBookings from "./pages/MyBookings";
import { Toaster } from "react-hot-toast";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Sitemap from "./pages/Sitemap";
import ScrollToTop from "./components/ScrollToTop";
import PaymentSuccess from "./pages/PaymentSuccess";

// Hotel Owner Dashboard
import OwnerLayout from "./pages/hotelOwner/Layout";
import OwnerDashboard from "./pages/hotelOwner/Dashboard";
import AddRoom from "./pages/hotelOwner/AddRoom";
import ListRoom from "./pages/hotelOwner/ListRoom";

const App = () => {
  const location = useLocation();

  // Hide the public Navbar and Footer on hotel owner pages
  const isOwnerPath = location.pathname.startsWith("/hotel-owner");

  return (
    <div className="font-inter">
      <ScrollToTop />
      <Toaster />

      {/* Public Navbar */}
      {!isOwnerPath && <Navbar />}

      <div className="min-h-[70vh]">
        <Routes>
          {/* =========================
              PUBLIC ROUTES
          ========================== */}

          <Route path="/" element={<Home />} />

          <Route path="/rooms" element={<AllRooms />} />

          <Route path="/rooms/:id" element={<RoomDetails />} />

          <Route path="/my-bookings" element={<MyBookings />} />

          <Route path="/gallery" element={<Gallery />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<ContactUs />} />

          <Route
            path="/privacy-policy"
            element={<PrivacyPolicy />}
          />

          <Route
            path="/terms"
            element={<TermsOfService />}
          />

          <Route path="/sitemap" element={<Sitemap />} />

          <Route
            path="/payment-success"
            element={<PaymentSuccess />}
          />

          {/* =========================
              HOTEL OWNER DASHBOARD
          ========================== */}

          <Route
            path="/hotel-owner"
            element={<OwnerLayout />}
          >
            {/* /hotel-owner */}
            <Route
              index
              element={<OwnerDashboard />}
            />

            {/* /hotel-owner/rooms */}
            <Route
              path="rooms"
              element={<ListRoom />}
            />

            {/* /hotel-owner/add-room */}
            <Route
              path="add-room"
              element={<AddRoom />}
            />
          </Route>

          {/* =========================
              404 FALLBACK
          ========================== */}

          <Route path="*" element={<Home />} />
        </Routes>
      </div>

      {/* Public Footer */}
      {!isOwnerPath && <Footer />}
    </div>
  );
};

export default App;
