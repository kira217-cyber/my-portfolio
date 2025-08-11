import React, { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeController = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div>
      <label className="swap swap-rotate cursor-pointer">
        <input
          type="checkbox"
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          checked={theme === "dark"}
        />

        {/* Light mode icon */}
        <FiSun className="swap-off h-6 w-6 text-black font-bold" />

        {/* Dark mode icon */}
        <FiMoon className="swap-on h-6 w-6 text-white font-bold" />
      </label>
    </div>
  );
};

export default ThemeController;
