import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import AllRooms from './pages/AllRooms'
import Gallery from './pages/Gallery'
import ContactUs from './pages/Contact'
import About from "./pages/About"
import RoomDetails from './pages/RoomDetails'
import MyBookings from './pages/MyBookings'
import { Toaster } from 'react-hot-toast'
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Sitemap from "./pages/Sitemap";
import ScrollToTop from "./components/ScrollToTop";
import PaymentSuccess from "./pages/PaymentSuccess";

// 🔐 Dashboard imports
import Layout from './pages/dashboard/Layout'
import Dashboard from './pages/dashboard/Dashboard'
import AddRoom from './pages/dashboard/AddRoom'
import ListRoom from './pages/dashboard/ListRoom'

const App = () => {

  const isOwnerPath = useLocation().pathname.includes("dashboard")

  return (
    <div className="font-inter">
      <ScrollToTop />
      <Toaster />

      {/* hide navbar on dashboard */}
      {!isOwnerPath && <Navbar />}

      <div className="min-h-[70vh]">
        <Routes>

          {/* PUBLIC ROUTES */}
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
          
          

          {/* 🔐 DASHBOARD ROUTES */}
          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="add-room" element={<AddRoom />} />
            <Route path="list-room" element={<ListRoom />} />
          </Route>

        </Routes>
      </div>

      <Footer />

    </div>
  )
}

export default App