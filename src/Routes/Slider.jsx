import React from "react";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Slider data with image sources and titles
const sliderData = [
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQso9L4zOv2vzdRC5m6kQ6f-uUD9xAR_Db_PQ&s",
    title: "Delicious Pasta",
  },
  {
    image: "https://img.freepik.com/free-photo/wooden-board-with-delicious-food-marble-surface_114579-83644.jpg",
    title: "Tasty Burger",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbfNlJ2oAlgHszfN-oZHNmQNtpPm6bOm8J8Q&s",
    title: "Fresh Salad",
  },
  {
    image: "https://img.freepik.com/free-photo/sliced-radish-offal-lettuce-leaf-plate-blue-background_114579-86456.jpg",
    title: "Exotic Pizza",
  },
  {
    image: "https://img.freepik.com/free-photo/sliced-carrots-bowl-vegetables-towel-blue-table_114579-90343.jpg",
    title: "Sweet Desserts",
  },
];

const Banner = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={3000}
      dynamicHeight
      swipeable
      emulateTouch
      className="relative"
    >
      {sliderData.map((slide, index) => (
        <div key={index} className="relative w-full h-[400px] md:h-[600px]">
          {/* Gradient overlay for design */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>

          <motion.img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full transform transition-all duration-500 ease-in-out hover:scale-105 object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
