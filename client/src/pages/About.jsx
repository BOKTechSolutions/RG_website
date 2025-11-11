import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800">
      {/* Header Section */}
      <section className="flex flex-col items-center pt-28 md:pt-35 px-4 md:px-16 lg:px-24 pb-20 text-center">
        <motion.h1
          className="font-playfair text-4xl md:text-[40px] font-bold mb-4 text-black"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ABOUT US
        </motion.h1>
        <motion.p
          className="max-w-2xl text-lg text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Stay updated with the latest happenings at our Guesthouse! From exciting events and
          special offers to exclusive insights and behind-the-scenes stories.
        </motion.p>
      </section>

      {/* About Executive Guest House */}
      <section className="py-16 px-4 md:px-16 lg:px-24 bg-white">
        <div className="max-w-5xl mx-auto text-center md:text-left">
          <h2 className="text-3xl font-semibold text-black mb-4">
            About Royal George Guest House
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Royal George Guest House offers <strong>24 luxury rooms</strong> designed for comfort and convenience. 
            Located at <strong>Top Base, Gbawe, Weija-Accra</strong>, the guest house is easy to find via the Accra-Kasoa Highway; 
            just pass Weija on the road, which leads directly to Top Base. This modern-day haven is approximately 
            <strong> 24 km </strong> from Kotoka International Airport, and is close to popular landmarks including 
            <strong> West Hills Mall </strong> and <strong> Kokrobite Beach </strong>. Being less than a five-minute drive from 
            <strong> Weija Junction </strong> and <strong> McCarthy Hill </strong> makes it perfectly placed for business, leisure, and Accra’s vibrant nightlife. Shopping centers and celebrated restaurants are also nearby.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Royal George Guest House is where comfort meets simplicity—designed to make every guest feel at home. Spread across two floors, it offers 18 cozy rooms, including Standard and Executive options, as well as Family Rooms. Each room comes with A/C and individual controls to ensure a relaxing and comfortable stay.
          </p>

          <button className="mt-6 px-6 py-3 bg-yellow-600 text-white rounded-full shadow-md hover:bg-yellow-700 transition">
            READ MORE
          </button>
        </div>
      </section>

      {/* Mission, Vision, and Core Values */}
      <section className="py-16 px-4 md:px-16 lg:px-24 bg-yellow-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-semibold text-black mb-3">
              OUR MISSION
            </h3>
            <p className="text-gray-700">
              To be Accra’s leading guest house, blending luxury, privacy, and warm local hospitality.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-black mb-3">
              OUR VISION
            </h3>
            <p className="text-gray-700">
              Deliver spaces that feel like home, equipped with modern comforts for both leisure and business travelers.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-black mb-3">
              CORE VALUES
            </h3>
            <p className="text-gray-700">
              Excellence, comfort, innovation, guest focus, cultural respect, and security define the Royal George Guest House experience.
            </p>
          </div>
        </div>
      </section>

      {/* Room Facilities Section */}
      <section className="py-16 px-4 md:px-16 lg:px-24 bg-white text-center">
        <h2 className="text-3xl font-semibold text-black mb-8">
          Room Facilities
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-800">
          {[
            "Queen-size bed",
            "RoofTop",
            "Fridge",
            "Ensuite bathroom",
            'Smart TV (52")',
            "Air Conditioner",
            "Free Wi-Fi",
            "Balcony (optional)",
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-yellow-50 border border-yellow-100 rounded-xl p-4 shadow-sm hover:shadow-md transition"
              whileHover={{ scale: 1.05 }}
            >
              {item}
            </motion.div>
          ))}
        </div>

      </section>

      {/* Conference Hall Section */}
      <section className="py-16 px-4 md:px-16 lg:px-24 bg-yellow-50 text-center">
        <h2 className="text-3xl font-semibold text-black mb-8">
          Conference Hall
        </h2>
        <p className="max-w-4xl mx-auto text-gray-700 leading-relaxed mb-6">
          We also provide a fully equipped conference hall for conferences, meetings, and other special occasions. Perfectly designed to accommodate both professional and social events, ensuring comfort and convenience for all guests.
        </p>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-800">
          {[
            "Projector & Screen",
            "Sound System",
            "Air Conditioning",
            "Wi-Fi Access",
            "Comfortable Seating",
            "Refreshments Available",
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white border border-yellow-100 rounded-xl p-4 shadow-sm hover:shadow-md transition"
              whileHover={{ scale: 1.05 }}
            >
              {item}
            </motion.div>
          ))}
        </div>
        <p className="mt-10 text-gray-600 italic">
          Explore our <strong>Rooms & Conference Hall</strong> — designed to make every stay and meetings unforgettable.
        </p>
      </section>
    </div>
  );
};

export default About;