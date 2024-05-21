import React from "react";
import { ModeToggle } from "./mode-toggle";
import Socials from "./socials";

export default function Footer() {
  return (
    <div className="border-t border-primary mt-20 py-10 flex items-center justify-between">
      <Socials />
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear() + " "} Matteo Urso
      </p>
      <ModeToggle />
    </div>
  );
}
