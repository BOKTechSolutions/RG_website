import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-base-200 pt-20 sm:pt-28 lg:pt-36 pb-8 sm:pb-16 lg:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-black">Contact Us</h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          
          {/* LEFT CONTACT INFO CONTAINER (Light Gold) */}
          <div className="shadow-md rounded-xl p-8" style={{ backgroundColor: "#ffeeb5" }}>
            <h3 className="text-base-content mb-6 text-2xl font-semibold">Get In Touch</h3>
            <p className="text-base-content/70 mb-10 text-lg leading-relaxed">
              Royal George Guest House is always ready to assist you. For bookings, inquiries, 
              or any special requests, feel free to reach out — we're happy to make your stay 
              as comfortable as possible.
            </p>

            <div className="grid gap-8">
              
              {/* Address Box */}
              <div className="p-5 rounded-lg border border-base-300 shadow-md bg-white flex items-start gap-4">
                <MapPin size={28} className="text-primary" />
                <div>
                  <h4 className="text-lg font-semibold text-base-content mb-1">Our Address</h4>
                  <p className="text-base-content/80 leading-relaxed">
                    Royal George Guest House <br />
                    Gbawe Top Base, Wejia-Accra - Ghana
                  </p>
                </div>
              </div>

              {/* Contact Box */}
              <div className="p-5 rounded-lg border border-base-300 shadow-md bg-white flex items-start gap-4">
                <Phone size={28} className="text-primary" />
                <div>
                  <h4 className="text-lg font-semibold text-base-content mb-1">Get in Touch</h4>
                  <p className="text-base-content/80 leading-relaxed">+233 54 533 4581</p>
                  <p className="text-base-content/80 leading-relaxed">+233 20 934 0362</p>
                </div>
              </div>

              {/* Email Box */}
              <div className="p-5 rounded-lg border border-base-300 shadow-md bg-white flex items-start gap-4">
                <Mail size={28} className="text-primary" />
                <div>
                  <h4 className="text-lg font-semibold text-base-content mb-1">Send a Mail</h4>
                  <p className="text-base-content/80 leading-relaxed">
                    Rgguesthouse@yahoo.com
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT FORM CONTAINER */}
          <div className="shadow-md rounded-xl p-8" style={{ backgroundColor: "#fff7d6" }}>
            <h3 className="text-base-content mb-6 text-2xl font-semibold">Send Us a Message</h3>

            <form className="grid gap-6">
              
              {/* Name */}
              <div>
                <label className="text-base-content font-medium">Name *</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-black outline-none bg-white"
                  required
                />
              </div>

              {/* Email + Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-base-content font-medium">Email *</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-black outline-none bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="text-base-content font-medium">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-black outline-none bg-white"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-base-content font-medium">Message *</label>
                <textarea
                  placeholder="Write your message"
                  className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-black outline-none bg-white h-32"
                  required
                ></textarea>
              </div>

              {/* BLACK SUBMIT BUTTON */}
              <button
                type="submit"
                className="w-full btn mt-2 bg-black text-white hover:bg-gray-800 border-none py-3 rounded-lg text-lg font-semibold"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
