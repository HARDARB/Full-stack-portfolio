// ThemeToggle.jsx
import { useTheme } from "../ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { isDark, setIsDark } = useTheme();

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="px-4 py-2 hover:text-white shadow-2xl hover:bg-teal-800 text-black dark:hover:bg-teal-400  dark:text-white dark:hover:text-black  rounded"
    >
      {isDark ? <Moon /> : <Sun />}
    </button>
  );
}
