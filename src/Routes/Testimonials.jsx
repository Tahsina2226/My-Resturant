import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const testimonialsData = [
    {
        id: 1,
        text: "Simply a gem! We have dined here many times, and it never fails to exceed expectations. The ambiance is delightful, and the food is outstanding.",
        name: "Jane Doe",
        rating: 4,
    },
    {
        id: 2,
        text: "The food was exceptional, and the staff was incredibly friendly. A great place for family gatherings or a date night.",
        name: "John Smith",
        rating: 5,
    },
    {
        id: 3,
        text: "An amazing experience! The menu has so much variety, and every dish is crafted with perfection. Highly recommended!",
        name: "Sarah Lee",
        rating: 4,
    },
    {
        id: 4,
        text: "Beautiful ambiance, and the flavors were absolutely incredible. I’ll definitely be coming back again soon!",
        name: "Michael Brown",
        rating: 4,
    },
    {
        id: 5,
        text: "From the presentation to the taste, everything was perfect. The service was quick, and the staff made us feel right at home.",
        name: "Emily Davis",
        rating: 5,
    },
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex - 1 + testimonialsData.length) % testimonialsData.length
        );
    };

    const { text, name, rating } = testimonialsData[currentIndex];

    return (
        <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 py-16 text-center">
            {/* Section Title */}
            <SectionTitle 
                heading="Testimonials" 
                subHeading="Customer Reviews" 
            />

            {/* Testimonial Content */}
            <div className="relative mx-auto mt-10 max-w-2xl overflow-hidden rounded-lg bg-white p-8 shadow-xl">
                {/* Star Rating */}
                <div className="mb-4 flex justify-center text-yellow-500">
                    {[...Array(5)].map((_, index) => (
                        <span 
                            key={index} 
                            className={index < rating ? 'text-yellow-500' : 'text-gray-300'}
                        >
                            &#9733;
                        </span>
                    ))}
                </div>

                {/* Quote Icon */}
                <div className="mb-4 text-5xl text-yellow-500">
                    <FaQuoteLeft className="animate-bounce" />
                </div>

                {/* Testimonial Text */}
                <p className="text-lg italic leading-relaxed text-gray-700">
                    "{text}"
                </p>

                {/* Customer Name */}
                <p className="mt-4 font-bold uppercase tracking-wide text-yellow-600">
                    {name}
                </p>

                {/* Decorative Elements */}
                <div className="absolute -left-10 -top-5 h-32 w-32 rounded-full bg-yellow-500 opacity-20"></div>
                <div className="absolute -bottom-5 -right-10 h-40 w-40 rounded-full bg-yellow-300 opacity-20"></div>
            </div>

            {/* Navigation Arrows */}
            <div className="mt-10 flex items-center justify-center gap-6">
                <button
                    className="rounded-full bg-gray-200 p-3 shadow-md transition duration-300 hover:bg-yellow-500 hover:text-white"
                    onClick={handlePrev}
                >
                    <FaArrowLeft size={20} />
                </button>
                <button
                    className="rounded-full bg-gray-200 p-3 shadow-md transition duration-300 hover:bg-yellow-500 hover:text-white"
                    onClick={handleNext}
                >
                    <FaArrowRight size={20} />
                </button>
            </div>
        </div>
    );
};

export default Testimonials;
