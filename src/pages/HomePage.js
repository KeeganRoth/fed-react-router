import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main>
      <h1>Home page</h1>
      <p>
        <Link to="/about">About</Link>
      </p>
    </main>
  );
};

export default HomePage;
