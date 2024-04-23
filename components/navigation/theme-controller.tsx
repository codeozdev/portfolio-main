"use client";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";

export function ThemeController() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <MdOutlineWbSunny className={`size-5  ${isDark ? "scale-100" : "scale-0"}`} />
      <IoMoonOutline className={`absolute size-5 ${isDark ? "scale-0" : "scale-100"}`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
