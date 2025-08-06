import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeSwitch = () => {
  const [theme, setTheme] = useState<"light" | "dark">(
    localStorage.getItem("theme") as "light" | "dark" || "light"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === "light" ? "dark" : "light");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-xl text-blue-600 dark:text-blue-400 transition duration-300"
      aria-label="Toggle Dark Mode"
    >
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
};

export default ThemeSwitch;
