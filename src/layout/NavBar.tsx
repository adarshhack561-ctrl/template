import { FC } from "react";
import { NavLink } from "react-router-dom";

const NavBar: FC = () => {
  const links = [
    { path: "/", label: "Home" },
    { path: "/dashboard", label: "Dashboard" },
    { path: "/users", label: "Users" },
    { path: "/login", label: "Login" },
    { path: "/settings", label: "Settings" },
    { path: "/about", label: "About" }
  ];

  return (
    <nav 
      className="px-6 py-3 flex gap-6 text-lg border-b"
      style={{
        backgroundColor: 'var(--card-bg)',
        borderColor: 'var(--border)',
        color: 'var(--text)',
      }}
    >
      {links.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `font-medium transition ${isActive ? "text-blue-600" : "hover:text-blue-600"}`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};
export default NavBar;
