import React from "react";
import { Link } from "react-router-dom";
import { StyledNavbar } from "./styles/StyledNavbar.styled";

const Navbar = () => {
  return (
    <StyledNavbar>
      <ul>
        <li>
          <Link to="/">Cadastro</Link>
        </li>
        <li>
          <Link to="/purchases">Compras</Link>
        </li>
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;
