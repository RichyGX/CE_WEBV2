// src/context/AuthContext.js
import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [role, setRole] = useState(localStorage.getItem('role') || null);

  const loginAs = (userRole) => {
    setRole(userRole);
    localStorage.setItem('role', userRole);
  };

  const logout = () => {
    setRole(null);
    localStorage.removeItem('role');
  };

  return (
    <AuthContext.Provider value={{ role, loginAs, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
