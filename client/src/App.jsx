
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

// 🔐 Hotel Owner Dashboard Imports
import Layout from "./pages/hotelOwner/Layout";
import Dashboard from "./pages/hotelOwner/Dashboard";
import AddRoom from "./pages/hotelOwner/AddRoom";
import ListRoom from "./pages/hotelOwner/ListRoom";

const App = () => {
  const location = useLocation();

  // Hide public navbar/footer on owner dashboard
  const isOwnerPath = location.pathname.startsWith("/hotelOwner");

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
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />

          {/* =========================
              HOTEL OWNER DASHBOARD
          ========================== */}
          <Route path="/hotelOwner" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="add-room" element={<AddRoom />} />
            <Route path="list-room" element={<ListRoom />} />
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
