import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactFaqPage = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqs = [
    {
      question: "What types of rooms are available?",
      answer: "Royal George Guest House offers 24 luxurious rooms, including single, double, and deluxe suites, all equipped with modern amenities for your comfort.",
    },
    {
      question: "Do you provide airport pickup?",
      answer: "Yes, we provide airport pickup services on request. Please contact us in advance to arrange transportation from Kotoka International Airport.",
    },
    {
      question: "Is breakfast included in the stay?",
      answer: "Yes, a complimentary breakfast is provided for all guests. Special dietary requests can be accommodated if informed beforehand.",
    },
    {
      question: "Are pets allowed in the guest house?",
      answer: "Unfortunately, pets are not allowed in the guest house to ensure the comfort and safety of all guests.",
    },
    {
      question: "Can I make a reservation online?",
      answer: "Yes, you can book your room directly through our website or contact us via phone or email for assistance.",
    },
  ];

  return (
    <div className="bg-base-200">

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-black">
            Contact Us
          </h2>
          <p className="text-base-content/70 mt-2 text-lg">
            Have questions or need assistance? Reach out to us or browse our FAQ below.
          </p>
        </div>

        {/* CONTACT SECTION */}
        <div className="grid gap-12 lg:grid-cols-2 mb-20">

          {/* Contact Info */}
          <div className="shadow-md rounded-xl p-8" style={{ backgroundColor: "#ffeeb5" }}>
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            <p className="text-base-content/70 mb-6 text-lg leading-relaxed">
              Royal George Guest House is always ready to assist you. For bookings, inquiries, 
              or any special requests, feel free to reach out — we're happy to make your stay 
              as comfortable as possible.
            </p>

            <div className="grid gap-6">

              <div className="p-5 rounded-lg border border-base-300 shadow-md bg-white flex items-start gap-4">
                <MapPin size={28} className="text-primary" />
                <div>
                  <h4 className="text-lg font-semibold mb-1">Our Address</h4>
                  <p className="text-base-content/80 leading-relaxed">
                    Royal George Guest House <br />
                    Gbawe Top Base, Wejia-Accra - Ghana
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-lg border border-base-300 shadow-md bg-white flex items-start gap-4">
                <Phone size={28} className="text-primary" />
                <div>
                  <h4 className="text-lg font-semibold mb-1">Phone</h4>
                  <p className="text-base-content/80 leading-relaxed">+233 54 533 4581</p>
                  <p className="text-base-content/80 leading-relaxed">+233 20 934 0362</p>
                </div>
              </div>

              <div className="p-5 rounded-lg border border-base-300 shadow-md bg-white flex items-start gap-4">
                <Mail size={28} className="text-primary" />
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email</h4>
                  <p className="text-base-content/80 leading-relaxed">Rgguesthouse@yahoo.com</p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="shadow-md rounded-xl p-8" style={{ backgroundColor: "#fff7d6" }}>
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>

            <form className="grid gap-6">
              <div>
                <label className="text-base-content font-medium">Name *</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-black outline-none bg-white"
                  required
                />
              </div>

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

              <div>
                <label className="text-base-content font-medium">Message *</label>
                <textarea
                  placeholder="Write your message"
                  className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-black outline-none bg-white h-32"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn mt-2 bg-black text-white hover:bg-gray-800 border-none py-3 rounded-lg text-lg font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>

        {/* FAQ SECTION */}
        <div className="space-y-6">
          <div className="mb-8 text-center">
            <h3 className="text-3xl font-bold text-black">Frequently Asked Questions</h3>
          </div>

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="shadow-md rounded-xl p-6 cursor-pointer transition-all duration-300"
              style={{ backgroundColor: "#ffeeb5" }}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out`}
                >
                  <path
                    d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                    stroke="#1D293D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p
                className={`text-base text-slate-800 mt-4 transition-all duration-500 ease-in-out max-w-md ${
                  openIndex === index ? "opacity-100 max-h-[300px]" : "opacity-0 max-h-0 overflow-hidden"
                }`}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ContactFaqPage;
