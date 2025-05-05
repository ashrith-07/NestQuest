'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar';



const ComparePage = () => {
  const [project1, setProject1] = useState('');
  const [project2, setProject2] = useState('');
  const [compareResult, setCompareResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCompare = async () => {
    try {
      const url = `https://mocki.io/v1/2f67d929-4ae2-4bb7-a232-4fe0e94266b6`; // mock API
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
  
      const result = await res.json();
      setCompareResult(result);
      setError(null);
    } catch (error) {
      setError(error.message);
      setCompareResult(null);
    }
  };
  
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Compare Projects</h1>

        <div className="flex flex-col md:flex-row gap-4 mb-6 justify-center">
          <input
            type="text"
            value={project1}
            onChange={(e) => setProject1(e.target.value)}
            placeholder="Enter Project 1"
            className="w-full md:w-1/2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            value={project2}
            onChange={(e) => setProject2(e.target.value)}
            placeholder="Enter Project 2"
            className="w-full md:w-1/2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="text-center mb-6">
          <button
            onClick={handleCompare}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Compare
          </button>
        </div>

        {error && <p className="text-red-600 text-center font-medium">Error: {error}</p>}

        {compareResult && (
          <div className="overflow-x-auto">
            <h2 className="text-xl font-semibold mb-4">Comparison Result</h2>
            <table className="min-w-full table-auto border border-gray-200">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="text-left px-4 py-3">Category</th>
                  <th className="text-left px-4 py-3">{compareResult.project1?.name}</th>
                  <th className="text-left px-4 py-3">{compareResult.project2?.name}</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {Object.entries(compareResult.data || {}).map(([category, values], idx) => (
                  <tr key={category} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium">{category}</td>
                    <td className="px-4 py-3">{values.project1 || '-'}</td>
                    <td className="px-4 py-3">{values.project2 || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default ComparePage;
