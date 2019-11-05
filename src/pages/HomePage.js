import React from "react";
import { Link } from "react-router-dom";
import AboutPage from "./AboutPage";

const HomePage = () => {
  return (
    <main>
      <h1>Home page</h1>
      <Link to="/about">About</Link>
    </main>
  );
};

export default HomePage;
