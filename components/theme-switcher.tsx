"use client";

import { Button } from "@headlessui/react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { MoonIcon } from "@heroicons/react/20/solid";
import { SunIcon } from "@heroicons/react/24/outline";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const onClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return null;
  }

  return (
    <Button onClick={onClick}>
      {theme === "dark" ? (
        <MoonIcon className="h-5 w-5 text-secondary hover:text-primary transition-colors" />
      ) : (
        <SunIcon className="h-5 w-5 text-secondary hover:text-primary transition-colors" />
      )}
    </Button>
  );
}
