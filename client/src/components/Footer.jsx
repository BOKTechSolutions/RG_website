import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#F6F9FC] text-gray-600 pt-10 px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-wrap justify-between gap-12 md:gap-6">
        
        {/* Logo + Description */}
        <div className="max-w-xs">
          <img
            src={assets.new_logo}
            alt="Royal George Guesthouse logo"
            className="mb-4 h-20 invert opacity-100"
          />
          <p className="text-sm">
            Discover the exceptional comfort and elegance of Royal George
            Guesthouse, your perfect retreat for a luxurious stay in Ghana.
          </p>
        </div>

        {/* Contact Info */}
        <div className="max-w-xs">
          <p className="font-playfair text-lg text-gray-800">CONTACT US</p>
          <ul className="mt-3 text-sm flex flex-col gap-2">
            <li>Gbawe Top Base, Weija-Accra</li>
            <li>+233 54 533 4581</li>
            <li>+233 20 934 0362</li>
            <li>
              <a href="mailto:Rgguesthouse@yahoo.com">
                Rgguesthouse@yahoo.com
              </a>
            </li>
            <li>
              <a href="mailto:reserve@Rgguesthouse.yahoo.com">
                reserve@Rgguesthouse.yahoo.com
              </a>
            </li>
          </ul>
        </div>

        {/* Address + Map */}
        <div className="max-w-xs">
          <p className="font-playfair text-lg text-gray-800">ADDRESS</p>
          <ul className="mt-3 text-sm flex flex-col gap-2">
            <li>GS-0073-4900</li>
            <li>Weija-Gbawe, Accra</li>
            <li>Ghana</li>
            <li>West Africa</li>
          </ul>

          <div className="mt-4 w-full h-40 rounded overflow-hidden">
            <iframe
              title="Royal George Guesthouse Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.5511095339657!2d-0.3121483!3d5.5665347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfa3938142998f%3A0xa9395952d0fdf4f3!2sRoyal%20George%20Guest%20House!5e1!3m2!1sen!2sgh!4v1752647407167!5m2!1sen!2sgh"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Newsletter */}
        <div className="max-w-xs">
          <p className="font-playfair text-lg text-gray-800">STAY UPDATED</p>
          <p className="mt-3 text-sm">
            Subscribe to our newsletter for updates and exclusive offers.
          </p>

          <div className="flex items-center mt-4">
            <input
              type="email"
              className="bg-white rounded-l border border-gray-300 h-9 px-3 outline-none w-full"
              placeholder="Your email"
            />
            <button className="bg-black h-9 w-9 flex items-center justify-center rounded-r">
              <img
                src={assets.arrowIcon}
                alt="Submit"
                className="w-3.5 invert"
              />
            </button>
          </div>
        </div>
      </div>

      <hr className="border-gray-300 mt-8" />

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5 text-sm">
        <p>
          © {new Date().getFullYear()} Royal George Guesthouse. All rights reserved.
        </p>

        <ul className="flex items-center gap-4">
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
  );
};

export default Footer;