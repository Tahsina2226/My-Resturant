import React from 'react';

const OurMenu = () => {
    return (
        <div className="relative h-[500px]">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('/public/banner.jpg')`,
                }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
                <div
                    className="rounded-md p-6 text-white shadow-lg"
                    style={{
                        backgroundColor: '#15151599', // Semi-transparent dark gray
                    }}
                >
                    <h1 className="mb-4 text-4xl font-bold md:text-4xl">OUR MENU</h1>
                    <p className="mb-2 text-lg italic md:text-xl">
                        Would you like to try a dish?
                    </p>
                    <p className="text-sm md:text-lg">
                        Explore our variety of flavors crafted to delight your taste buds.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OurMenu;
