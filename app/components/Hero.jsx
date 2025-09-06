import React from 'react';
import Link from 'next/link';
import TextType from '@/components/TextType';

const Hero = () => {
  return (
    <div
      className="h-[700px] bg-cover bg-center flex flex-col justify-center items-start text-left px-10"
      style={{ backgroundImage: 'url("/images/images.png")' }}
    >
      <div className="mb-6">
        <TextType
          text={[
            "Welcome to NestQuest",
            "Find and compare the best properties",
          ]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        />
      </div>

      <Link href="./compare">
        <button className="mt-4 px-6 py-3 text-lg bg-[#2B1B12] text-white rounded-md hover:bg-[#3c2b20] transition">
          Compare
        </button>
      </Link>
    </div>
  );
};

export default Hero;
