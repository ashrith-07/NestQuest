import React from 'react';
import Link from 'next/link';
import TextType from '@/components/TextType';

const Hero = () => {
  return (
    <div
      className="h-[700px] bg-cover bg-center flex flex-col justify-center items-start px-6 md:px-10"
      style={{ backgroundImage: 'url("/images/images.png")' }}
    >
      {/* Heading with typing */}
      <TextType
        as="h1"
        text={["Welcome to NestQuest"]}
        typingSpeed={70}
        pauseDuration={2000}
        loop={true}
        showCursor={true}
        cursorCharacter=""
        className="text-4xl md:text-6xl font-bold text-[#2B1B12] mb-4 leading-snug"
      />

      {/* Static subheading */}
      <p className="text-lg md:text-xl font-medium text-[#2B1B12]/90 mb-6 leading-relaxed">
        Find and compare the best properties
      </p>

      {/* Button */}
      <Link href="/compare">
        <button className="px-6 py-3 text-base md:text-lg bg-[#2B1B12] text-white rounded-md hover:bg-[#3c2b20] transition">
          Compare
        </button>
      </Link>
    </div>
  );
};

export default Hero;
