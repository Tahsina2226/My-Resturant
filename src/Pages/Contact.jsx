import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-50 py-10">
      {/* Our Location Section */}
      <section className="bg-gradient-to-r from-yellow-100 via-white to-yellow-100 py-12 text-center">
        <h2 className="font-semibold text-2xl text-gray-600 tracking-wide">--- Visit Us ---</h2>
        <h3 className="mt-4 font-bold text-4xl text-gray-900">OUR LOCATION</h3>
        <div className="flex md:flex-row flex-col justify-center gap-8 mt-10">
          <div className="border-gray-300 bg-white shadow-lg p-6 border rounded-lg w-64 transform transition-transform hover:scale-105">
            <h4 className="font-bold text-gray-800 text-xl">PHONE</h4>
            <p className="mt-2 text-gray-600">+88 0123 56 78 799</p>
          </div>
          <div className="border-gray-300 bg-white shadow-lg p-6 border rounded-lg w-64 transform transition-transform hover:scale-105">
            <h4 className="font-bold text-gray-800 text-xl">ADDRESS</h4>
            <p className="mt-2 text-gray-600">123 Street Name, City, Country</p>
          </div>
          <div className="border-gray-300 bg-white shadow-lg p-6 border rounded-lg w-64 transform transition-transform hover:scale-105">
            <h4 className="font-bold text-gray-800 text-xl">WORKING HOURS</h4>
            <p className="mt-2 text-gray-600">
              Mon - Fri: 08:00 - 22:00 <br /> Sat - Sun: 10:00 - 23:00
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white py-12 text-center">
        <h2 className="font-semibold text-2xl text-gray-600 tracking-wide">--- Send Us a Message ---</h2>
        <h3 className="mt-4 font-bold text-4xl text-gray-900">CONTACT FORM</h3>
        <form
          className="border-gray-300 bg-gray-50 shadow-2xl mx-auto mt-10 p-10 border rounded-lg max-w-3xl transform transition-transform hover:scale-105"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block font-medium text-gray-700 text-left">
              Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="border-gray-300 bg-white p-4 border rounded-lg focus:ring-4 focus:ring-yellow-300 w-full focus:outline-none"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block font-medium text-gray-700 text-left">
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="border-gray-300 bg-white p-4 border rounded-lg focus:ring-4 focus:ring-yellow-300 w-full focus:outline-none"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block font-medium text-gray-700 text-left">
              Phone*
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              className="border-gray-300 bg-white p-4 border rounded-lg focus:ring-4 focus:ring-yellow-300 w-full focus:outline-none"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block font-medium text-gray-700 text-left">
              Message*
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here"
              className="border-gray-300 bg-white p-4 border rounded-lg focus:ring-4 focus:ring-yellow-300 w-full min-h-[120px] focus:outline-none"
              required
            ></textarea>
          </div>
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="recaptcha"
              name="recaptcha"
              className="border-gray-300 rounded focus:ring-yellow-400 w-5 h-5 text-yellow-400"
              required
            />
            <label htmlFor="recaptcha" className="ml-3 text-gray-700">
              I'm not a robot
            </label>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-yellow-400 hover:from-yellow-500 to-yellow-500 hover:to-yellow-600 shadow-md px-8 py-4 rounded-lg font-semibold text-white transition duration-300"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
