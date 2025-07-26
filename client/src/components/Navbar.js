import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context';

export default function Navbar() {
  const { user, logout, cart } = useContext(AuthContext);
  return (
    <nav>
      <Link to="/">Flipkart</Link>
      <Link to="/cart">Cart ({cart.length})</Link>
      {user ? (
        <span onClick={logout}>Logout ({user.name})</span>
      ) : (
        <Link to="/login">Sign In</Link>
      )}
    </nav>
  );
}