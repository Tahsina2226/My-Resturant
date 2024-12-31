import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import SectionTitle from "./SectionTitle";

const slides = [
    '/public/slide1.jpg',
    '/public/slide2.jpg',
    '/public/slide3.jpg',
    '/public/slide4.jpg',
    '/public/slide5.jpg',
];

const categories = ["Salads", "Pizzas", "Soups", "Desserts", "Salads"];

const Category = () => {
    return (
        <section className="bg-gray-100 py-12">
            <SectionTitle
                subHeading={"From 11.00am to 10.00pm"}
                heading={"Order Online"}
            />
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mb-24 mySwiper"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative shadow-lg rounded-lg overflow-hidden group">
                            <img
                                src={slide}
                                alt={categories[index]}
                                className="group-hover:scale-110 w-full h-64 transform transition-transform duration-300 object-cover"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
                            {/* Category Name */}
                            <h3 className="group-hover:scale-110 bottom-4 left-1/2 absolute font-bold text-2xl text-white uppercase tracking-wide transform transition-transform -translate-x-1/2 duration-300">
                                {categories[index]}
                            </h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Category;
