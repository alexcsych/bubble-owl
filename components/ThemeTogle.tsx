"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle () {
  const { theme, toggleTheme } = useTheme();

  if (!theme) return <div className='w-7.5 h-7.5' />;

  return (
    <button
      onClick={toggleTheme}
      className=' text-white p-0.75 font-bold flex items-center justify-center hover:opacity-90 transition-all'
    >
      {theme === "dark" ? <Moon size={24} /> : <Sun size={24} />}
    </button>
  );
}
