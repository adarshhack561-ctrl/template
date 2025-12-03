import type { FC } from "react";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from '../context/AuthContext'; // Import useAuth hook
import Button from "../components/ui/Button"; // Adjusted import path

const Header: FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { logout } = useAuth(); // Access logout function from context

  return (
    <header 
      className="py-4 px-6 flex justify-between items-center border-b"
      style={{
        backgroundColor: 'var(--card-bg)',
        color: 'var(--text)',
        borderColor: 'var(--border)',
        boxShadow: `0 1px 3px var(--shadow)`,
      }}
    >
      <h1 className="text-2xl font-bold tracking-wide">My Application</h1>
      <div className="flex gap-3 items-center">
        <button
          onClick={toggleTheme}
          className="px-3 py-1 border rounded flex items-center gap-2"
          title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          aria-label="Toggle Theme"
        >
          {theme === "light" ? (
            <>
              <span>Dark</span>
              <span>🌙</span> {/* Moon symbol for dark mode */}
            </>
          ) : (
            <>
              <span>Light</span>
              <span>☀️</span> {/* Sun symbol for light mode */}
            </>
          )}
        </button>
        <Button 
          label="Logout" 
          onClick={logout} 
          color={{ background: '#F44336', text: '#FFFFFF' }} 
        />
      </div>
    </header>
  );
};
export default Header;
