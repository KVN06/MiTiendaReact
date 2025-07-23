import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        🛍️ Tienda K
      </Link>
      <Link to="/products" className="navbar-link">
        Productos
      </Link>
      <Link to="/users" className="navbar-link">
        Usuarios
      </Link>
      <Link to="/about" className="navbar-link">
        Acerca de
      </Link>
      <Link to="/contact" className="navbar-link">
        Contacto
      </Link>
    </nav>
  );
};

export default Navbar;
