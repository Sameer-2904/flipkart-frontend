import { createContext, useState, useEffect } from 'react';
import API from './api';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser) setUser(savedUser);
  }, []);

  const login = async (email, password) => {
    const res = await API.post('/auth/login', { email, password });
    localStorage.setItem('user', JSON.stringify(res.data));
    setUser(res.data);
  };

  const register = async (name, email, password) => {
    await API.post('/auth/register', { name, email, password });
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, cart, setCart }}>
      {children}
    </AuthContext.Provider>
  );
}