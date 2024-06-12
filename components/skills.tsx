"use client";
import React from "react";
import Title from "./title";
import { HoverEffect } from "./ui/card-hover-effect";
import {
  SiExpo,
  SiExpress,
  SiGit,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      title: "React",
      Icon: SiReact,
    },
    {
      title: "Next.js",
      Icon: SiNextdotjs,
    },
    {
      title: "Expo",
      Icon: SiExpo,
    },
    {
      title: "TailwindCSS",
      Icon: SiTailwindcss,
    },
    {
      title: "TypeScript",
      Icon: SiTypescript,
    },
    {
      title: "Node.js",
      Icon: SiNodedotjs,
    },
    {
      title: "Express.js",
      Icon: SiExpress,
    },
    {
      title: "Git",
      Icon: SiGit,
    },
  ];

  return (
    <div className="max-5-xl mx-auto">
      <Title
        text="Skills 🛠"
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <HoverEffect items={skills} />
    </div>
  );
}
