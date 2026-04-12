import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
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
          PRIVACY POLICY
        </motion.h1>

        <motion.p
          className="max-w-2xl text-lg text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          At Royal George Guest House, your privacy is important to us. This Privacy Policy
          explains how we collect, use, and protect your personal information when you use our
          website, make a booking, or interact with our services.
        </motion.p>

        <p className="mt-4 text-sm text-gray-500">
          Last Updated: April 12, 2026
        </p>
      </section>

      {/* Content */}
      <section className="py-16 px-4 md:px-16 lg:px-24 bg-yellow-50">
        <div className="max-w-5xl mx-auto space-y-12">

          {/* Information We Collect */}
          <div>
            <h2 className="text-2xl font-semibold text-black mb-3">
              1. Information We Collect
            </h2>

            <p className="text-gray-700 leading-relaxed mb-3">
              We may collect the following types of information:
            </p>

            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>
                <strong>Personal Information:</strong> Name, email address, phone number,
                home address, nationality, and ID details provided during booking or check-in.
              </li>

              <li>
                <strong>Payment Information:</strong> Credit/debit card details, billing address,
                and transaction records.
              </li>

              <li>
                <strong>Booking Information:</strong> Dates of stay, room preferences, and special requests.
              </li>

              <li>
                <strong>Website Data:</strong> IP address, browser type, device information,
                and cookies for analytics and performance.
              </li>

              <li>
                <strong>Communication Data:</strong> Messages or inquiries sent via email,
                contact forms, or WhatsApp.
              </li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div>
            <h2 className="text-2xl font-semibold text-black mb-3">
              2. How We Use Your Information
            </h2>

            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Process and confirm bookings.</li>
              <li>Communicate with you about reservations or inquiries.</li>
              <li>Provide personalized customer service.</li>
              <li>Improve our website and guest experience.</li>
              <li>Send marketing offers (only if you opt-in).</li>
              <li>Comply with legal obligations and security requirements.</li>
            </ul>
          </div>

          {/* Sharing Information */}
          <div>
            <h2 className="text-2xl font-semibold text-black mb-3">
              3. Sharing Your Information
            </h2>

            <p className="text-gray-700 leading-relaxed mb-3">
              We do not sell or rent your personal information. However, we may share your data with:
            </p>

            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li><strong>Service Providers:</strong> Payment processors, IT support, and guest services.</li>
              <li><strong>Legal Authorities:</strong> When required by law or for security reasons.</li>
            </ul>
          </div>

          {/* Data Security */}
          <div>
            <h2 className="text-2xl font-semibold text-black mb-3">
              4. Data Security
            </h2>

            <p className="text-gray-700 leading-relaxed">
              We implement strong security measures to protect your personal data from
              unauthorized access, alteration, or disclosure. All online payments are processed
              through secure encrypted gateways.
            </p>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="text-2xl font-semibold text-black mb-3">
              5. Cookies and Tracking
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Our website uses cookies to improve user experience, analyze performance,
              and personalize content. You may disable cookies in your browser settings,
              but some features may not work properly.
            </p>
          </div>

          {/* Third Party Links */}
          <div>
            <h2 className="text-2xl font-semibold text-black mb-3">
              6. Third-Party Links
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Our website may contain links to external websites. We are not responsible for
              their privacy practices or content.
            </p>
          </div>

          {/* Rights */}
          <div>
            <h2 className="text-2xl font-semibold text-black mb-3">
              7. Your Rights
            </h2>

            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Access and update your personal information.</li>
              <li>Request deletion of your data (subject to legal obligations).</li>
              <li>Opt out of marketing communications.</li>
            </ul>
          </div>

          {/* Updates */}
          <div>
            <h2 className="text-2xl font-semibold text-black mb-3">
              8. Changes to This Policy
            </h2>

            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. The latest version
              will always be available on our website.
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
              Address: Gbawe Top Base, Weija-Accra, Ghana
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;