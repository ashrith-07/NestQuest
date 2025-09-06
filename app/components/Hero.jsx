import React from 'react';
import Link from 'next/link';
import TextType from '@/components/TextType';
const Hero = () => {
  return (
    <div
      className="h-[700px] bg-cover bg-center flex flex-col justify-center items-start text-left px-10"
      style={{ backgroundImage: 'url("/images/images.png")' }}
    >
    <TextType/>
      <h1 className="text-5xl font-bold text-[#2B1B12] mb-4">
        Welcome to NestQuest
      </h1>
      <br></br>
      <p className="text-xl text-[#2B1B12] mb-6">
        Find and compare the best properties
      </p>
      <Link href="./compare">
        <button className="mt-4 px-6 py-3 text-lg bg-[#2B1B12] text-white rounded-md hover:bg-[#3c2b20] transition">
          Compare
        </button>
      </Link>
    </div>
  );
};

export default Hero;
