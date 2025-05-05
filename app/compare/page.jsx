"use client";
import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ComparePage = () => {
  const [properties, setProperties] = useState([]);
  const [selectedOne, setSelectedOne] = useState("");
  const [selectedTwo, setSelectedTwo] = useState("");
  const [showResults, setShowResults] = useState(false);
  const resultRef = useRef(null);

  useEffect(() => {
    fetch("https://dummyjson.com/c/3b8b-d588-482f-9d99")
      .then((res) => res.json())
      .then((data) => setProperties(data ?? []))
      .catch((err) => console.error("Failed to fetch properties:", err));
  }, []);

  const getProperty = (id) => properties.find((p) => p.id?.toString() === id);

  const handleCompare = () => {
    if (selectedOne && selectedTwo) {
      setShowResults(true);
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      alert("Please select both properties before comparing.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fef6f2]">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center px-4 py-12 text-center">
        <h1 className="text-4xl font-bold text-[#291b14] mb-4">
          Compare Properties
        </h1>
        <p className="text-gray-600 mb-10">
          Select two properties to see how they stack up.
        </p>

        <div className="flex flex-wrap gap-6 justify-center mb-6">
          <select
            value={selectedOne}
            onChange={(e) => setSelectedOne(e.target.value)}
            className="px-4 py-2 w-72 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#291b14]"
          >
            <option value="">Select first property</option>
            {properties.map((p) => (
              <option key={p.id} value={p.id}>
                {p.title}
              </option>
            ))}
          </select>

          <select
            value={selectedTwo}
            onChange={(e) => setSelectedTwo(e.target.value)}
            className="px-4 py-2 w-72 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#291b14]"
          >
            <option value="">Select second property</option>
            {properties.map((p) => (
              <option key={p.id} value={p.id}>
                {p.title}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleCompare}
          className="bg-[#291b14] text-white px-6 py-2 rounded-lg hover:bg-[#3e2a1f] transition"
        >
          Compare
        </button>
      </div>

      {showResults && (
        <div ref={resultRef} className="bg-[#fff7f2] px-6 py-12 w-full">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[getProperty(selectedOne), getProperty(selectedTwo)].map((prop, idx) =>
              prop ? (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-lg p-6 border border-[#e2d4c4]"
                >
                  <img
                    src={prop.image_url}
                    alt={prop.title}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <h2 className="text-xl font-bold text-[#291b14] mb-1">
                    {prop.title}
                  </h2>
                  <p className="text-sm text-[#725f53] mb-4">{prop.location}</p>
                  <ul className="text-sm text-[#4b3d35] space-y-1 text-left">
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
                <div
                  key={idx}
                  className="bg-[#fceeee] text-[#9b1c1c] border border-[#f5c2c2] rounded-2xl p-6 text-center text-md font-medium"
                >
                  Property not found or not selected.
                </div>
              )
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ComparePage;
