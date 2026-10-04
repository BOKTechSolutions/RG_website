
import React from "react";
import { assets } from "../../assets/assets";
import { UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
      
      {/* Logo */}
      <Link to="/">
        <img
          className="h-9 invert opacity-80"
          src={assets.logo}
          alt="Royal George Hotel"
        />
      </Link>

      {/* Dashboard Title + Account */}
      <div className="flex items-center gap-4">
        <span className="hidden sm:block text-sm text-gray-500">
          Hotel Management
        </span>

        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;

