import React, { useEffect, useState } from 'react';
import SectionTitle from './SectionTitle';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('/public/Menu.json') // Adjust your data path as needed
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="bg-gray-50 shadow-lg mx-auto my-12 px-4 py-8 rounded-lg max-w-6xl">
            <SectionTitle 
                heading="From Our Menu" 
                subHeading="Popular Items" 
            />
            <div className="mt-8 overflow-x-auto">
                <table className="border-collapse border-gray-300 border w-full table-auto">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border-gray-300 px-4 py-2 border text-left">Image</th>
                            <th className="border-gray-300 px-4 py-2 border text-left">Name</th>
                            <th className="border-gray-300 px-4 py-2 border text-left">Recipe</th>
                            <th className="border-gray-300 px-4 py-2 border text-left">Price</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {menu.map(item => (
                            <tr key={item._id} className="hover:bg-gray-100">
                                <td className="border-gray-300 px-4 py-2 border">
                                    <img 
                                        src={item.image} 
                                        alt={item.name} 
                                        className="rounded w-20 h-20 object-cover"
                                    />
                                </td>
                                <td className="border-gray-300 px-4 py-2 border text-gray-800">{item.name}</td>
                                <td className="border-gray-300 px-4 py-2 border text-gray-600">{item.recipe}</td>
                                <td className="border-gray-300 px-4 py-2 border font-bold text-gray-800">${item.price}</td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PopularMenu;
