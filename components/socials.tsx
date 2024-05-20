import Link from "next/link";
import React from "react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

const socials = [
  {
    link: "https://github.com/MatteoUrso",
    label: "GitHub",
    Icon: SiGithub,
  },
  {
    link: "https://www.linkedin.com/in/matteo-urso-26026a233/",
    label: "LinkedIn",
    Icon: SiLinkedin,
  },
  {
    link: "https://x.com/MatteoUrso2002",
    label: "X",
    Icon: SiX,
  },
];

export default function Socials() {
  return (
    <div className="flex items-center gap-5">
      {socials.map(({ link, label, Icon }) => (
        <Link key={label} href={link} aria-label={label} target="_blank">
          <Icon className="w-5 h-5 hover:scale-125 transition-all" />
        </Link>
      ))}
    </div>
  );
}
