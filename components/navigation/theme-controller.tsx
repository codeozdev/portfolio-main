"use client";

import { useTheme } from "next-themes";

import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";

export function ThemeController() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button onClick={() => setTheme(isDark ? "light" : "dark")}>
      {isDark ? <MdOutlineWbSunny className="size-5" /> : <IoMoonOutline className="size-5" />}
    </button>
  );
}
