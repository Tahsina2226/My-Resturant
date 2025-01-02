import React from 'react';
import SectionTitle from './SectionTitle';
import FeaturedImg from '/public/featured.jpg';

const FeaturedItem = () => {
    return (
        <div className="featured-section relative px-4 py-12 text-white">
            {/* Parallax background image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${FeaturedImg})`,
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            ></div>
            {/* Overlay for dimming the background */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            {/* Content */}
            <div className="relative mb-8 text-center">
                <SectionTitle
                    heading="Check It Out"
                    subHeading="From Our Menu"
                />
            </div>
            <div className="featured-content relative mx-auto flex max-w-4xl flex-col items-center rounded-lg bg-black bg-opacity-60 p-6 md:flex-row">
                <div className="w-full md:w-1/2">
                    <img className="rounded-lg shadow-lg" src={FeaturedImg} alt="Featured Item" />
                </div>
                <div className="mt-4 w-full text-left md:ml-6 md:mt-0 md:w-1/2">
                    <p className="text-sm">March 20, 2023</p>
                    <h3 className="my-2 text-2xl font-bold">WHERE CAN I GET SOME?</h3>
                    <p className="mb-4">
                        Discover a unique blend of flavors crafted with care and precision. Our featured dish combines fresh, high-quality ingredients to bring you an unforgettable culinary experience.
                    </p>
                    <p className="mb-4">
                        Perfect for food lovers, this special menu item is a testament to our commitment to excellence and innovation in the kitchen. Don't miss the chance to savor this extraordinary creation!
                    </p>
                    <button className="rounded bg-yellow-500 px-4 py-2 font-bold text-white hover:bg-yellow-600">
                        Order Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedItem;
