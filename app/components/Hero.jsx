import React from 'react';
import Link from 'next/link';
import TextType from '@/components/TextType';

const Hero = () => {
  return (
    <div
      className="h-[700px] bg-cover bg-center flex flex-col justify-center items-start md:items-start text-left px-6 md:px-10"
      style={{ backgroundImage: 'url("/images/images.png")' }}
    >
      {/* Heading */}
      <TextType
        as="h1"
        text={["Welcome to NestQuest"]}
        typingSpeed={75}
        pauseDuration={1500}
        loop={true}
        showCursor={true}
        cursorCharacter="|"
        cursorClassName="text-3xl md:text-5xl font-bold text-[#2B1B12]"
        className="text-3xl md:text-5xl font-bold text-[#2B1B12] mb-3 leading-snug"
      />

      {/* Subheading */}
      <TextType
        as="p"
        text={["Find and compare the best properties"]}
        typingSpeed={75}
        pauseDuration={2000}
        loop={true}
        showCursor={true}
        cursorCharacter="|"
        cursorClassName="text-lg md:text-xl text-[#2B1B12]"
        className="text-lg md:text-xl text-[#2B1B12] mb-6 leading-relaxed"
      />

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
