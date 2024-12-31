import React, { useState } from "react";
import { FaCartPlus, FaUserCircle, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="z-10 fixed bg-indigo-900 bg-opacity-30 shadow-md px-6 py-3 w-full text-white">
      <div className="flex justify-between items-center mx-auto container">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-2">
          <div>
            <h1 className="font-bold text-2xl hover:text-yellow-400 transition duration-300">
              Bistro <span className="text-yellow-400">Boss</span>
            </h1>
            <p className="text-gray-400 text-xs uppercase tracking-wide">
              Restaurant
            </p>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="md:flex space-x-8 hidden font-semibold text-sm uppercase">
          <a href="#home" className="hover:text-yellow-400 transition duration-300">
            Home
          </a>
          <a href="#contact" className="hover:text-yellow-400 transition duration-300">
            Contact Us
          </a>
          <a href="#dashboard" className="hover:text-yellow-400 transition duration-300">
            Dashboard
          </a>
          <a href="#menu" className="hover:text-yellow-400 transition duration-300">
            Our Menu
          </a>
          <a href="#shop" className="hover:text-yellow-400 transition duration-300">
            Our Shop
          </a>
        </div>

        {/* Right Section: Icons */}
        <div className="flex items-center space-x-6">
          <FaCartPlus className="text-xl hover:text-yellow-400 transition duration-300 cursor-pointer" />
          <FaUserCircle className="text-xl hover:text-yellow-400 transition duration-300 cursor-pointer" />
          <span className="text-xl hover:text-yellow-400 transition duration-300 cursor-pointer">Sign Out</span>
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex items-center md:hidden">
          <button
            aria-label="Open Menu"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-2xl hover:text-yellow-400 transition duration-300"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="space-y-4 md:hidden bg-indigo-900 shadow-lg mt-4 p-4 rounded-lg">
          <div className="space-y-2 font-semibold text-sm uppercase">
            <a href="#home" className="block text-white hover:text-yellow-400 transition duration-300">
              Home
            </a>
            <a href="#contact" className="block text-white hover:text-yellow-400 transition duration-300">
              Contact Us
            </a>
            <a href="#dashboard" className="block text-white hover:text-yellow-400 transition duration-300">
              Dashboard
            </a>
            <a href="#menu" className="block text-white hover:text-yellow-400 transition duration-300">
              Our Menu
            </a>
            <a href="#shop" className="block text-white hover:text-yellow-400 transition duration-300">
              Our Shop
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
