"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Title from "./title";

export default function HeroSection() {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold text-primary">
          Hello 👋, I&apos;m
          <br />
          <TypeAnimation
            sequence={[
              "Matteo Urso",
              1000,
              "Web Developer",
              1000,
              "Mobile Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="underline underline-offset-8 decoration-green-500"
          />
        </h1>
        <p className="md:w-96 text-lg text-secondary">
          Based in Cremona, Italy. I am a Web Developer and Mobile Developer who
        </p>
        <Link
          href="mailto:matteourso100@gmail.com"
          className="inline-block group"
        >
          <Title text="Contattami 📧" />
        </Link>
      </div>
      <div className="rounded-full w-72 h-72 relative bg-quaternary">
        <Image
          src="/images/hero_image.png"
          alt="Hero Image"
          width={300}
          height={300}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        />
      </div>
      {/* <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
        <div className="flex gap-3 translate-x-8">
          <div className="w-32 h-32 rounded-2xl bg-green-500" />
          <div className="w-32 h-32 rounded-full bg-indigo-500" />
        </div>
        <div className="flex gap-3 -translate-x-8">
          <div className="w-32 h-32 rounded-2xl bg-indigo-500" />
          <div className="w-32 h-32 rounded-full bg-green-500" />
        </div>
        <div className="glow absolute top-[40%] right-1/2 -z-10" />
        <div className="absolute top-[5%] right-[20%]">
          <Image
            src="/images/hero_image.png"
            alt="Hero Image"
            width={300}
            height={300}
          />
        </div>
      </div> */}
    </div>
  );
}
