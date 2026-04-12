import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Sitemap = () => {
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
          SITEMAP
        </motion.h1>

        <motion.p
          className="max-w-2xl text-lg text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Explore all pages of Royal George Guest House website for easy navigation and quick access to our services.
        </motion.p>
      </section>

      {/* Content */}
      <section className="py-16 px-4 md:px-16 lg:px-24 bg-yellow-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">

          {/* Main Pages */}
          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">
              Main Pages
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li>
                <Link to="/" className="hover:underline">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">About Us</Link>
              </li>
              <li>
                <Link to="/rooms" className="hover:underline">Rooms</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:underline">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Legal Pages */}
          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">
              Legal Pages
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li>
                <Link to="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link to="/terms" className="hover:underline">
                  Terms of Service
                </Link>
              </li>

              <li>
                <Link to="/sitemap" className="hover:underline">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Sitemap;