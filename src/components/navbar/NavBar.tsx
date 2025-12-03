import navlinks from "./navlinks.json";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import Button from "../Button"; // Adjust the import path as necessary

const NavBar = () => {
  const { toggleTheme } = useTheme();

  return (
    <nav className="p-4 flex justify-between bg-gray-100 dark:bg-gray-800">
      <div className="flex gap-4">
        {navlinks.map((link) => (
          <Link key={link.path} to={link.path} className="hover:underline">
            {link.name}
          </Link>
        ))}
      </div>

      <Button
        label="Toggle Theme"
        onClick={toggleTheme}
        color={{ background: "#607D8B", text: "#FFFFFF" }}
      />
    </nav>
  );
};

export default NavBar;
