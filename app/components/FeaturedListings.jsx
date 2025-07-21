'use client';

import React, { useEffect, useState } from 'react';
import { FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';

const FeaturedListings = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Verified Pexels house images
  const houseImages = [
    "https://images.pexels.com/photos/5917/architecture-building-exterior-home.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/210112/pexels-photo-210112.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/259589/pexels-photo-259589.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/1571465/pexels-photo-1571465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/323781/pexels-photo-323781.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  ];

  // Fetch and update listings
  useEffect(() => {
    async function fetchListings() {
      try {
        const res = await fetch('https://dummyjson.com/c/3b8b-d588-482f-9d99');
        const data = await res.json();
        const items = Array.isArray(data)
          ? data
          : Array.isArray(data.items)
          ? data.items
          : [];

        const updatedItems = items.slice(0, 6).map((item, idx) => ({
          ...item,
          image_url: houseImages[idx % houseImages.length],
        }));

        setListings(updatedItems);
      } catch (error) {
        console.error('Failed to fetch listings', error);
        setListings([]);
      } finally {
        setLoading(false);
      }
    }
    fetchListings();
  }, []);

  // Function to handle broken images
  const handleImageError = (e, index) => {
    let nextIndex = (index + 1) % houseImages.length;
    e.target.src = houseImages[nextIndex];
  };

  return (
    <div className="bg-[#FEF7F2] px-6 md:px-16 py-14">
      <h2 className="text-3xl font-bold text-center text-[#2A1B12] mb-10">
        Featured Properties
      </h2>

      {loading ? (
        <p className="text-center text-[#2A1B12]">Loading...</p>
      ) : listings.length === 0 ? (
        <p className="text-center text-gray-500">No properties available.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {listings.map((item, index) => (
              <div
                key={item.id || index}
                className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                  onError={(e) => handleImageError(e, index)}
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[#2A1B12] mb-1">
                    {item.title || 'Luxury Home'}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{item.location || 'Sample Location'}</p>
                  <p className="text-[#2A1B12] font-bold text-lg mb-4">
                    ${item.price_usd?.toLocaleString() || '1,200,000'}
                  </p>
                  <div className="flex items-center gap-3 text-gray-600 text-sm mb-4">
                    <span className="flex items-center gap-1">
                      <FaBed /> {item.bedrooms || 3} Beds
                    </span>
                    <span className="flex items-center gap-1">
                      <FaBath /> {item.bathrooms || 2} Baths
                    </span>
                    <span className="flex items-center gap-1">
                      <FaRulerCombined /> {item.area_sqft || 1500} sqft
                    </span>
                  </div>
                  <button className="mt-2 w-full px-4 py-2 bg-[#2A1B12] text-white rounded-lg hover:bg-[#3c2b20] transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="px-6 py-2 bg-[#2A1B12] text-white font-medium rounded-lg hover:bg-[#3c2b20] transition">
              View All Properties
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default FeaturedListings;
