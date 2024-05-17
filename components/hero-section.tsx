"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 my-4">
      <div className="col-span-7 place-self-center place-items-center grid md:place-items-start">
        <h1 className="text-white max-w-2xl mb-4 md:text-6xl text-4xl font-extrabold font-sans">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-600">
            Hello, I&apos;m
          </span>
          <br />
          <TypeAnimation
            sequence={[
              "Matteo",
              1000,
              "Web Developer",
              1000,
              "Mobile Designer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-[#ADB7BE] mb-6 textl-lg md:text-xl">
          I am a Web Developer and Mobile Designer. I design and code
          beautifully simple things, and I love what I do.
        </p>
        <div>
          <button className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white px-6 py-3 rounded-full mr-4">
            Hire Me
          </button>
          <button className="m-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-1 py-1  text-white rounded-full">
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
              Download CV
            </span>
          </button>
        </div>
      </div>
      <div className="col-span-5 place-self-center mt-4 md:mt-0">
        <div className="bg-[#181818] lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px] w-[250px] h-[250px] rounded-full relative">
          <Image
            src="/images/hero_image.png"
            alt="hero image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
