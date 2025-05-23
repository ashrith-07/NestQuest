"use client";
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const page = () => {


    return (
        <div>
            <Navbar />
            <div>
                <div className='flex flex-col lg:flex-row items-center gap-10 px-6 py-10 lg:px-20'>
                    <div>
                        <img src='/images/about-img.png' className='rounded-xl w-full max-w-md lg:max-w-lg object-cover mb-6 lg:mb-0' />
                    </div>
                    <div className='px-4 lg:px-10 max-w-xl text-center lg:text-left'>
                        <h1 className='text-5xl font-extrabold text-[#2E1F1F] leading-tight'>We Help You To Find Your Dream Home</h1>
                        <p className='text-[#2E1F1F] my-6 leading-relaxed font-medium'>From cozy cottages to luxurious estates, our dedicated team guides you through every step of the journey, ensuring your dream home becomes a reality</p>
                        <div className='flex justify-between text-[#2E1F1F] mt-10'>
                            <div className='text-center'>
                                <h1 className='text-3xl font-extrabold'>8K+</h1>
                                <p className='text-sm font-medium mt-2'>Houses Available</p>
                            </div>
                            <div className='text-center'>
                                <h1 className='text-3xl font-extrabold'>6K+</h1>
                                <p className='text-sm font-medium mt-2'>Houses Sold</p>
                            </div>
                            <div className='text-center'>
                                <h1 className='text-3xl font-extrabold'>2K+</h1>
                                <p className='text-sm font-medium mt-2'>Trusted partners</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-5xl font-extrabold text-[#2E1F1F] leading-tight text-center my-8'>Why Choose Us</h1>
                    <p className='text-[#2E1F1F] my-6 leading-relaxed font-medium text-center'>Elevating Your Home Buying Experience with Expertise, Integrity, and Unmatched Personalized Service</p>
                    <div className='flex flex-wrap justify-center gap-8 px-6 py-10 '>
                        <div className=' flex flex-col items-center bg-[#FEF7F2] shadow-md rounded-lg p-6 max-w-xs text-center transition-transform hover:scale-105'>
                            <img src="images/Group 33.png"></img>
                            <h4 className='text-xl font-semibold text-[#2E1F1F] mt-4 mb-2'>Expert Guidance</h4>
                            <p>Benefit from our team's seasoned expertise for a smooth buying experience</p>
                        </div>
                        <div className=' flex flex-col items-center bg-[#FEF7F2] shadow-md rounded-lg p-6 max-w-xs text-center transition-transform hover:scale-105'>
                            <img src="images/Group 34.png"></img>
                            <h4 className='text-xl font-semibold text-[#2E1F1F] mt-4 mb-2'>Personalized Service</h4>
                            <p>Our services adapt to your unique needs, making your journey stress-free</p>
                        </div>
                        <div className=' flex flex-col items-center bg-[#FEF7F2] shadow-md rounded-lg p-6 max-w-xs text-center transition-transform hover:scale-105'>
                            <img src="images/Group 35.png"></img>
                            <h4 className='text-xl font-semibold text-[#2E1F1F] mt-4 mb-2'>Transparent Process</h4>
                            <p>Stay informed with our clear and honest approach to buying your home</p>
                        </div>
                        <div className=' flex flex-col items-center bg-[#FEF7F2] shadow-md rounded-lg p-6 max-w-xs text-center transition-transform hover:scale-105'>
                            <img src="images/Group 36.png"></img>
                            <h4 className='text-xl font-semibold text-[#2E1F1F] mt-4 mb-2'>Exceptional Support</h4>
                            <p>Providing peace of mind with our responsive and attentive customer service</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default page