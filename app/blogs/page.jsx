import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div className="bg-[white] min-h-screen">
      <Navbar />
      <div className="py-12 px-6 text-center">
        <h1 className="text-3xl font-bold text-[#2D1C10]">What People Say<br />About NestQuest</h1>

        <div className="mt-10 flex flex-col md:flex-row gap-6 justify-center items-center">
          <div className="bg-[#DDC7BB] rounded-xl shadow-md max-w-sm">
            <img src="images/Group 15-1.png" alt="Room" className="rounded-t-xl" />
            <div className="p-4 text-left">
              <div className="flex items-center gap-3 mb-3">
                <img src="images/image (31) 1.png" alt="Sarah" className="w-10 h-10 rounded-full" />
                <div>
                  <h4 className="font-semibold text-[#2D1C10]">Sarah Nguyen</h4>
                  <p className="text-sm text-gray-600">San Francisco</p>
                </div>
                <div className="ml-auto bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm flex items-center">
                  ⭐ 5.0
                </div>
              </div>
              <p className="text-sm text-[#4B3A2F]">
                NestQuest truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched.
              </p>
            </div>
          </div>
          <div className="bg-[#DDC7BB] rounded-xl shadow-md max-w-sm">
            <img src="images/Group 15-2.png" alt="Room" className="rounded-t-xl" />
            <div className="p-4 text-left">
              <div className="flex items-center gap-3 mb-3">
                <img src="images/image (39) 1.png" alt="Michael" className="w-10 h-10 rounded-full" />
                <div>
                  <h4 className="font-semibold text-[#2D1C10]">Michael Rodriguez</h4>
                  <p className="text-sm text-gray-600">San Diego</p>
                </div>
                <div className="ml-auto bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm flex items-center">
                  ⭐ 4.5
                </div>
              </div>
              <p className="text-sm text-[#4B3A2F]">
                I had a fantastic experience working with NestQuest. Their expertise and personalized service exceeded my expectations. I found my dream home quickly and smoothly. Highly recommended!
              </p>
            </div>
          </div>
          <div className="bg-[#DDC7BB] rounded-xl shadow-md max-w-sm">
            <img src="images/Group 15.png" alt="Room" className="rounded-t-xl" />
            <div className="p-4 text-left">
              <div className="flex items-center gap-3 mb-3">
                <img src="images/image (35) 1.png" alt="Emily" className="w-10 h-10 rounded-full" />
                <div>
                  <h4 className="font-semibold text-[#2D1C10]">Emily Johnson</h4>
                  <p className="text-sm text-gray-600">Los Angeles</p>
                </div>
                <div className="ml-auto bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm flex items-center">
                  ⭐ 5.0
                </div>
              </div>
              <p className="text-sm text-[#4B3A2F]">
                NestQuest made my dream of owning a home a reality! Their team provided exceptional support and guided me through every step of the process. I couldn’t be happier with my new home!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FEF7F2] py-16 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2D1C10] mb-6">
          Do You Have Any Questions?<br />
          <span className="block">Get Help From Us</span>
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-10">
          <p className="text-[#2D1C10] font-medium">
            Chat live with our support team
          </p>
          <p className="text-[#2D1C10] font-medium">
            Browse our FAQ
          </p>
        </div>

        {/* Email Input Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="text"
            placeholder="Enter your email address..."
            className="bg-[#DDC7BB] text-[#2D1C10] placeholder-[#4B3A2F] px-4 py-3 rounded-md w-[300px] sm:w-[400px] outline-none"
          />
          <button className="bg-[#2D1C10] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#1c120a] transition">
            Submit
          </button>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <Footer />
    </div>
  )
}

export default page
