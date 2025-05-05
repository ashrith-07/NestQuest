"use client";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ComparePage = () => {
  const [properties, setProperties] = useState([]);
  const [selectedOne, setSelectedOne] = useState("");
  const [selectedTwo, setSelectedTwo] = useState("");
  const [showComparison, setShowComparison] = useState(false);
  const comparisonRef = useRef(null);

  useEffect(() => {
    fetch("https://dummyjson.com/c/3b8b-d588-482f-9d99") // replace with your API endpoint
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((err) => console.error("Failed to fetch:", err));
  }, []);

  const handleCompare = () => {
    if (selectedOne && selectedTwo) {
      setShowComparison(true);
      setTimeout(() => {
        comparisonRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const getProperty = (id) => properties.find((p) => p.id === parseInt(id));

  return (
    <div className="bg-[#fef5ee] text-[#2b1907] min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-center mb-6">Compare Properties</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <select
            className="p-3 border rounded-md bg-white"
            value={selectedOne}
            onChange={(e) => setSelectedOne(e.target.value)}
          >
            <option value="">Select first property</option>
            {properties.map((property) => (
              <option key={property.id} value={property.id}>
                {property.title}
              </option>
            ))}
          </select>

          <select
            className="p-3 border rounded-md bg-white"
            value={selectedTwo}
            onChange={(e) => setSelectedTwo(e.target.value)}
          >
            <option value="">Select second property</option>
            {properties.map((property) => (
              <option key={property.id} value={property.id}>
                {property.title}
              </option>
            ))}
          </select>
        </div>

        <div className="text-center mb-12">
          <button
            className="bg-[#2b1907] text-white px-6 py-3 rounded-md hover:bg-[#3a2610] transition"
            onClick={handleCompare}
            disabled={!selectedOne || !selectedTwo}
          >
            Compare
          </button>
        </div>

        {showComparison && (
          <div ref={comparisonRef} className="grid md:grid-cols-2 gap-6">
          {[getProperty(selectedOne), getProperty(selectedTwo)].map((prop, idx) =>
  prop ? (
    <div key={idx} className="bg-white rounded-xl shadow p-6">
      <img
        src={prop.image_url}
        alt={prop.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{prop.title}</h2>
      <p className="mb-1">{prop.location}</p>
      <ul className="text-sm space-y-1">
        <li>🛏️ {prop.bedrooms} Bedrooms</li>
        <li>🛁 {prop.bathrooms} Bathrooms</li>
        <li>📐 {prop.area_sqft} sq ft</li>
        <li>🏗️ Built in {prop.year_built}</li>
        <li>🚗 Parking: {prop.parking_spaces}</li>
        <li>🏡 Type: {prop.property_type}</li>
        <li>💰 ${prop.price_usd.toLocaleString()}</li>
      </ul>
    </div>
  ) : (
    <div key={idx} className="bg-white rounded-xl shadow p-6 text-center text-red-600">
      Property data not found.
    </div>
  )
)}

          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ComparePage;
