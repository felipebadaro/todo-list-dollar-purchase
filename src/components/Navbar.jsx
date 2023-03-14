import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbarWrapper">
      <ul>
        <li>
          <Link to="/">Cadastro</Link>
        </li>
        <li>
          <Link to="/purchases">Compras</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
