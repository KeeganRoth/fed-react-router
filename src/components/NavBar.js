import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "center-between" }}>
      <Link to="/">Home</Link>
      <Link to="/giphy">giphy</Link>
      <Link to="/about">about</Link>
    </nav>
  );
};

export default NavBar;
