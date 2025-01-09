import React, { useEffect, useState } from 'react';
import SectionTitle from './SectionTitle';

const OfferedMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('/public/Menu.json') // Adjust your data path as needed
            .then((res) => res.json())
            .then((data) => {
                const offeredItems = data.filter((item) => item.category === 'offered');
                setMenu(offeredItems);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="bg-gradient-to-r from-white via-gray-50 to-white shadow-2xl mx-auto my-12 px-6 py-10 rounded-lg max-w-6xl">
            <SectionTitle 
                heading="From Our Menu" 
                subHeading="Offered Items" 
            />
            <div className="mt-8 overflow-x-auto">
                <table className="border-collapse border-gray-300 shadow-lg border rounded-lg w-full table-auto">
                    <thead>
                        <tr className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100">
                            <th className="border-gray-300 px-6 py-4 border font-semibold text-gray-800 text-left">Image</th>
                            <th className="border-gray-300 px-6 py-4 border font-semibold text-gray-800 text-left">Name</th>
                            <th className="border-gray-300 px-6 py-4 border font-semibold text-gray-800 text-left">Recipe</th>
                            <th className="border-gray-300 px-6 py-4 border font-semibold text-gray-800 text-left">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menu.map((item, index) => (
                            <tr 
                                key={item._id} 
                                className={`${
                                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                                } hover:bg-gray-100`}
                            >
                                <td className="border-gray-300 px-6 py-4 border">
                                    <img 
                                        src={item.image} 
                                        alt={item.name} 
                                        className="shadow-md rounded-lg w-20 h-20 object-cover"
                                    />
                                </td>
                                <td className="border-gray-300 px-6 py-4 border font-medium text-gray-900">{item.name}</td>
                                <td className="border-gray-300 px-6 py-4 border text-gray-700">{item.recipe}</td>
                                <td className="border-gray-300 px-6 py-4 border font-bold text-gray-800">
                                    <span className="bg-green-100 px-3 py-1 rounded-md text-green-700">
                                        ${item.price}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OfferedMenu;
