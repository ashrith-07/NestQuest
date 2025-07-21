'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// 15 curated real estate Pexels images
const houseImages = [
  "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/259950/pexels-photo-259950.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/259957/pexels-photo-259957.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/298886/pexels-photo-298886.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
];

const PropertyDetails = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/c/3b8b-d588-482f-9d99')
      .then((res) => res.json())
      .then((data) => {
        const items = Array.isArray(data) ? data : data.items || [];
        const updated = items.map((item, index) => ({
          ...item,
          image_url: houseImages[index % houseImages.length],
        }));
        setProperties(updated);
      })
      .catch((err) => console.error('Error fetching property details:', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-[#FEF7F2] min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow px-6 md:px-16 py-12">
        <h1 className="text-4xl font-bold text-center text-[#2A1B12] mb-10">
          Property Listings
        </h1>

        {loading ? (
          <p className="text-center text-[#2A1B12]">Loading properties...</p>
        ) : properties.length === 0 ? (
          <p className="text-center text-gray-500">No property details found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, idx) => (
              <div
                key={property.id || idx}
                className="bg-white rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <img
                  src={property.image_url}
                  alt={property.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                  onError={(e) => {
                    e.target.src =
                      houseImages[(idx + 1) % houseImages.length];
                  }}
                />
                <div className="p-5">
                  <h2 className="text-lg font-semibold text-[#2A1B12] mb-1">
                    {property.title}
                  </h2>
                  <p className="text-gray-600 mb-2">{property.location}</p>
                  <p className="text-[#2A1B12] font-bold mb-3">
                    ${property.price_usd?.toLocaleString()}
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mb-4">
                    <li>🛏️ {property.bedrooms} Bedrooms</li>
                    <li>🛁 {property.bathrooms} Bathrooms</li>
                    <li>📐 {property.area_sqft} sq ft</li>
                    <li>🏗️ Built in {property.year_built}</li>
                    <li>🚗 Parking: {property.parking_spaces}</li>
                    <li>🏡 Type: {property.property_type}</li>
                    <li>💰 ${property.price_usd.toLocaleString()}</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default PropertyDetails;
