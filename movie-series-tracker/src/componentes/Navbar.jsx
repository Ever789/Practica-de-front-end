import React from 'react';
import '../estilos/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/movies">Películas</a></li>
        <li><a href="/series">Series</a></li>
        <li><a href="/about">Acerca de</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;