import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
const AuthContext = createContext();
export function useAuth() { return useContext(AuthContext); }
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      axios.get("/api/user")
        .then(res => setUser(res.data))
        .catch(() => setUser(null));
    }
  }, []);
  const login = async (email, password) => {
    await axios.get("/sanctum/csrf-cookie");
    const res = await axios.post("/api/login", { email, password });
    setUser(res.data.user);
    localStorage.setItem('token', res.data.token);
  };
  const logout = async () => {
    await axios.post("/api/logout");
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
