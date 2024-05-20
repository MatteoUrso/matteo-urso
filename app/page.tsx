import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import NavBar from "@/components/nav-bar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <div className="dark:bg-grid-white/[0.05] bg-grid-black/[0.05]">
        <div className="max-w-7xl mx-auto p-5">
          <NavBar />
          <HeroSection />
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-5 mt-20">
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
