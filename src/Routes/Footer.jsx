import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaUtensils,
  FaCalendarCheck,
  FaInfoCircle,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-12 text-white">
      <div className="mx-auto px-6 sm:px-8 lg:px-16 container">
        <div className="gap-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center md:text-left">
          {/* About Section */}
          <div>
            <h3 className="mb-4 font-bold text-2xl">
              Bistro<span role="img" aria-label="chef">🍳</span>Boss
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your ultimate destination for <span className="text-yellow-400">exquisite dining</span> and culinary delights. We serve <span className="text-yellow-400">happiness</span>, one plate at a time. <span role="img" aria-label="plate">🍽️</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-lg">
              Quick Links <span role="img" aria-label="link">🔗</span>
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#menu" className="flex justify-center md:justify-start items-center gap-2 hover:text-yellow-400">
                  <FaUtensils /> <span>Our Menu</span>
                </a>
              </li>
              <li>
                <a href="#reservations" className="flex justify-center md:justify-start items-center gap-2 hover:text-yellow-400">
                  <FaCalendarCheck /> <span>Reservations</span>
                </a>
              </li>
              <li>
                <a href="#about" className="flex justify-center md:justify-start items-center gap-2 hover:text-yellow-400">
                  <FaInfoCircle /> <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="flex justify-center md:justify-start items-center gap-2 hover:text-yellow-400">
                  <FaEnvelope /> <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="mb-4 font-semibold text-lg">
              Contact Us <span role="img" aria-label="phone">📞</span>
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex justify-center md:justify-start items-center gap-2">
                <FaPhoneAlt className="text-yellow-400" /> +1 (123) 456-7890
              </li>
              <li className="flex justify-center md:justify-start items-center gap-2">
                <FaEnvelope className="text-yellow-400" /> contact@bistroboss.com
              </li>
              <li className="flex justify-center md:justify-start items-center gap-2">
                <FaMapMarkerAlt className="text-yellow-400" /> 123 Bistro Lane, Foodie City
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="mb-4 font-semibold text-lg">
              Follow Us <span role="img" aria-label="social">🌐</span>
            </h4>
            <div className="flex justify-center md:justify-start space-x-4 text-xl">
              <a href="#" aria-label="Facebook" className="hover:text-yellow-400">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-yellow-400">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-yellow-400">
                <FaTwitter />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-yellow-400">
                <FaYoutube />
              </a>
              <a href="#" aria-label="Pinterest" className="hover:text-yellow-400">
                <FaPinterest />
              </a>
            </div>
            <p className="mt-4 text-gray-400 text-sm">
              Join us for the latest updates and offers!
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-gray-700 mt-12 pt-6 border-t text-center text-gray-500 text-sm">
          <p>&copy; 2024 Bistro<span role="img" aria-label="chef">🍳</span>Boss. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
