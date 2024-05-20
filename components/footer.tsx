import React from "react";
import ThemeToggle from "./theme-toggle";
import Socials from "./socials";

export default function Footer() {
  return (
    <div className="border-t border-primary mt-20 py-10 flex items-center justify-between">
      <Socials />
      <p className="text-secondary text-sm">
        &copy; {new Date().getFullYear() + " "} Matteo Urso
      </p>
      <ThemeToggle />
    </div>
  );
}
