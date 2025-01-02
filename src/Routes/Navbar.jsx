import React, { useState } from "react";
import { FaCartPlus, FaUserCircle, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed z-10 w-full bg-indigo-900 bg-opacity-30 px-6 py-3 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-2">
          <div>
            <h1 className="text-2xl font-bold transition duration-300 hover:text-yellow-400">
              Bistro <span className="text-yellow-400">Boss</span>
            </h1>
            <p className="text-xs uppercase tracking-wide text-gray-400">
              Restaurant
            </p>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="hidden space-x-8 text-sm font-semibold uppercase md:flex">
          <Link to="/home" className="transition duration-300 hover:text-yellow-400">
            Home
          </Link>
          <Link to="/contact" className="transition duration-300 hover:text-yellow-400">
            Contact Us
          </Link>
          <Link to="/dashboard" className="transition duration-300 hover:text-yellow-400">
            Dashboard
          </Link>
          <Link to="/menu" className="transition duration-300 hover:text-yellow-400">
            Our Menu
          </Link>
          <Link to="/shop" className="transition duration-300 hover:text-yellow-400">
            Our Shop
          </Link>
        </div>

        {/* Right Section: Icons */}
        <div className="flex items-center space-x-6">
          <FaCartPlus className="cursor-pointer text-xl transition duration-300 hover:text-yellow-400" />
          <FaUserCircle className="cursor-pointer text-xl transition duration-300 hover:text-yellow-400" />
          <span className="cursor-pointer text-xl transition duration-300 hover:text-yellow-400">
            Sign Out
          </span>
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex items-center md:hidden">
          <button
            aria-label="Open Menu"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-2xl transition duration-300 hover:text-yellow-400"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mt-4 space-y-4 rounded-lg bg-indigo-900 p-4 shadow-lg md:hidden">
          <div className="space-y-2 text-sm font-semibold uppercase">
            <Link to="/home" className="block text-white transition duration-300 hover:text-yellow-400">
              Home
            </Link>
            <Link to="/contact" className="block text-white transition duration-300 hover:text-yellow-400">
              Contact Us
            </Link>
            <Link to="/dashboard" className="block text-white transition duration-300 hover:text-yellow-400">
              Dashboard
            </Link>
            <Link to="/menu" className="block text-white transition duration-300 hover:text-yellow-400">
              Our Menu
            </Link>
            <Link to="/shop" className="block text-white transition duration-300 hover:text-yellow-400">
              Our Shop
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
