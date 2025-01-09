import React, { useEffect, useState } from "react";

const Order = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    // Fetch the JSON data
    fetch("/public/Menu.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  // Get unique categories and include "All" as the default category
  const categories = ["All", ...new Set(items.map((item) => item.category))];

  // Filter items based on the active category
  const filteredItems =
    activeCategory === "All"
      ? items
      : items.filter(
          (item) => item.category.toLowerCase() === activeCategory.toLowerCase()
        );

  // Group items by category
  const groupedItems = filteredItems.reduce((groups, item) => {
    const { category } = item;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(item);
    return groups;
  }, {});

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  return (
    <div className="bg-gray-50 shadow-lg mx-auto p-6 rounded-lg container">
      {/* Category Row */}
      <div className="flex justify-center items-center space-x-6 mb-8 pb-2 border-b">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`text-lg font-semibold transition-all duration-300 py-2 px-4 rounded-md ${
              activeCategory === category
                ? "text-yellow-600 border-b-2 border-yellow-600"
                : "text-gray-800 hover:text-yellow-600 hover:bg-gray-200"
            }`}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Category-wise Items List */}
      {Object.keys(groupedItems).map((category) => (
        <div key={category} className="mb-12">
          <h2 className="mb-4 font-bold text-2xl text-gray-800">{category}</h2>
          <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {groupedItems[category].map((item) => (
              <div
                key={item.id}
                className="shadow-lg hover:shadow-xl border rounded-lg transform transition duration-200 overflow-hidden hover:scale-105"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {item.name}
                    {item.isNew && (
                      <span className="bg-yellow-500 ml-2 px-2 py-1 rounded-full text-white text-xs">
                        New
                      </span>
                    )}
                  </h3>
                  <p className="text-gray-700">{item.recipe}</p>
                  <p className="mt-2 font-bold text-green-600">
                    ${item.price.toFixed(2)}
                  </p>
                  {item.isPromotion && (
                    <p className="mt-2 font-semibold text-red-500 text-sm">
                      Special Offer!
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Order;
