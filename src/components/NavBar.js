import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between" }}>
      <Link to="/">Home</Link>
      <Link to="/giphy">Giphy</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default NavBar;
