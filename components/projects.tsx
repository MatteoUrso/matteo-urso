import React from "react";
import Title from "./title";
import {
  SiClerk,
  SiCloudinary,
  SiMongodb,
  SiNextdotjs,
  SiShadcnui,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

// https://ui.aceternity.com/components/direction-aware-hover
export default function Projects() {
  const projects = [
    {
      title: "Yoom",
      tech: [SiNextdotjs, SiTypescript, SiClerk, SiShadcnui, SiTailwindcss],
      link: "https://github.com/MatteoUrso/yoom",
      cover: "/images/projects/yoom.PNG",
      background: "bg-indigo-500",
    },
    {
      title: "Imaginify",
      tech: [
        SiNextdotjs,
        SiTypescript,
        SiClerk,
        SiShadcnui,
        SiCloudinary,
        SiTailwindcss,
        SiMongodb,
        SiStripe,
      ],
      link: "https://github.com/MatteoUrso/imaginify",
      cover: "/images/projects/imaginify.PNG",
      background: "bg-green-500",
    },
  ];

  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects 🚀"
        className="flex flex-col items-center justify-center rotate-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => (
          <Link key={index} href={project.link}>
            <div className={cn("p-5 rounded-md", project.background)}>
              <DirectionAwareHover
                imageUrl={project.cover}
                className="w-full space-y-5 cursor-pointer"
              >
                <div className="space-y-5">
                  <h1 className="font-bold text-2xl">{project.title}</h1>
                  <div className="flex items-center gap-5">
                    {project.tech.map((Icon, index) => {
                      return <Icon key={index} className="w-5 h-5" />;
                    })}
                  </div>
                </div>
              </DirectionAwareHover>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
