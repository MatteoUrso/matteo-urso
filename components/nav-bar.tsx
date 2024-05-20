import React from "react";
import Socials from "./socials";

export default function NavBar() {
  return (
    <nav className="py-10 flex justify-between">
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        Matteo Urso 👨‍💻
      </h1>
      <Socials />
    </nav>
  );
}
