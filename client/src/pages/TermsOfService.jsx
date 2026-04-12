import React from "react";
import { motion } from "framer-motion";

const TermsOfService = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800">

      {/* Header */}
      <section className="flex flex-col items-center pt-28 md:pt-35 px-4 md:px-16 lg:px-24 pb-16 text-center">
        <motion.h1
          className="font-playfair text-4xl md:text-[40px] font-bold mb-4 text-black"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          TERMS OF SERVICE
        </motion.h1>

        <motion.p
          className="max-w-2xl text-lg text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
        </motion.p>

        <p className="mt-4 text-sm text-gray-500">
          Last Updated: April 12, 2026
        </p>
      </section>

      {/* Content */}
      <section className="py-16 px-4 md:px-16 lg:px-24 bg-yellow-50">
        <div className="max-w-5xl mx-auto space-y-12">

          {/* Booking Terms */}
          <div>
            <h2 className="text-2xl font-semibold text-black mb-3">
              Booking & Reservations
            </h2>
            <p className="text-gray-700 leading-relaxed">
              All bookings made through our website or directly are subject to availability.
              A booking is only confirmed after receiving full or partial payment confirmation.
            </p>
          </div>

          {/* Check-in */}
          <div>
            <h2 className="text-2xl font-semibold text-black mb-3">
              Check-in & Check-out
            </h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>Check-in time: From 12:00 PM</li>
              <li>Check-out time: By 11:30 AM</li>
              <li>Early check-in or late check-out may attract extra charges</li>
            </ul>
          </div>

          {/* Cancellation */}
          <div>
            <h2 className="text-2xl font-semibold text-black mb-3">
              Cancellation Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Cancellations must be made at least 24–48 hours before arrival.
              Late cancellations or no-shows may result in partial or full charges.
            </p>
          </div>

          {/* Guest Responsibilities */}
          <div>
            <h2 className="text-2xl font-semibold text-black mb-3">
              Guest Responsibilities
            </h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>Guests must provide accurate booking information</li>
              <li>Respect property rules and other guests</li>
              <li>Damage to property will be charged accordingly</li>
            </ul>
          </div>

          {/* Liability */}
          <div>
            <h2 className="text-2xl font-semibold text-black mb-3">
              Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Royal George Guest House is not responsible for loss of personal belongings,
              accidents, or damages caused by third-party services.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-semibold text-black mb-3">
              Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Email: Rgguesthouse@yahoo.com <br />
              Phone: +233 54 533 458 / +233 20 934 0362 <br />
              Location: Gbawe Top Base, Weija-Accra
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default TermsOfService;