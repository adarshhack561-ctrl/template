import React, { createContext, useState } from "react";
import type { ReactNode } from "react";

interface User {
  // Define the properties of the User object here
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  login: () => void;
  logout: () => void; // Added logout to the context type
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = () => {
    // Implement your login logic here
    // On successful login, set the user state
    const loggedInUser: User = { id: "1", name: "John Doe", email: "john.doe@example.com" }; // Mocked user
    setUser(loggedInUser);
    // Store authentication data (e.g., tokens) in localStorage or any other storage
    localStorage.setItem('authToken', 'your-auth-token');
  };

  const logout = () => {
    // Clear user authentication data (e.g., tokens, user state)
    localStorage.removeItem('authToken');
    setUser(null); // Reset user state
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
