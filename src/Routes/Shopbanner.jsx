import React from 'react';


const OurMenu = () => {
    return (
        <div>
            <div className="relative h-[500px]">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('/banner.jpg')`, // Corrected path
                    }}
                ></div>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative flex flex-col justify-center items-center px-4 h-full text-center">
                    <div
                        className="shadow-lg p-6 rounded-md text-white"
                        style={{
                            backgroundColor: '#15151599', // Semi-transparent dark gray
                        }}
                    >
                        <h1 className="mb-4 font-bold text-4xl md:text-4xl">OUR SHOP</h1>
                        <p className="mb-2 text-lg md:text-xl italic">
                        Would you like to try a dish?
                        </p>
                        <p className="text-sm md:text-lg">
    Explore our menu and indulge in delicious dishes crafted just for you. Whether you're craving a quick bite or a full meal, we've got something for everyone!
</p>

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default OurMenu;
