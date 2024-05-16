import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = React.PropsWithChildren & {
  href: string;
};

export default function NavLink({ href, children }: Props) {
  const pathname = `/${usePathname().split("/")[1]}`;
  const active = pathname === href;

  return (
    <Link
      className={clsx(
        "px-4 py-2 rounded-lg text-sm hover:text-primary transition-colors font-mono",
        active
          ? "bg-secondary text-primary font-medium"
          : "text-secondary font-normal"
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
