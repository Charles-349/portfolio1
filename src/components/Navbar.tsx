
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

const Navbar = () => {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("theme") || "light"
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-base-100 border-b border-base-200 shadow-sm">
      <div className="navbar max-w-7xl mx-auto px-4">
        <div className="flex-1">
          <NavLink
            to="/"
            className="text-xl font-bold tracking-wide text-primary"
          >
            Charles
          </NavLink>
        </div>

        <div className="lg:hidden">
          <button className="btn btn-ghost btn-circle" onClick={toggleMenu}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <div className="hidden lg:flex gap-2 items-center">
          <ul className="menu menu-horizontal px-1 text-sm md:text-base">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "text-primary font-semibold" : undefined}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? "text-primary font-semibold" : undefined}>About</NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={({ isActive }) => isActive ? "text-primary font-semibold" : undefined}>Projects</NavLink>
            </li>
            <li>
              <NavLink to="/skills" className={({ isActive }) => isActive ? "text-primary font-semibold" : undefined}>Skills</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? "text-primary font-semibold" : undefined}>Contact</NavLink>
            </li>
          </ul>
          <button className="btn btn-sm btn-ghost" onClick={toggleTheme}>
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-base-100 px-4 pb-4 shadow">
          <ul className="menu flex flex-col gap-1">
            <li><NavLink to="/" onClick={toggleMenu}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={toggleMenu}>About</NavLink></li>
            <li><NavLink to="/projects" onClick={toggleMenu}>Projects</NavLink></li>
            <li><NavLink to="/skills" onClick={toggleMenu}>Skills</NavLink></li>
            <li><NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink></li>
            <li>
              <button className="btn btn-sm btn-ghost mt-2" onClick={toggleTheme}>
                {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
