import React from "react";
import { Link } from "react-router-dom";
const AboutPage = () => {
  return (
    <main>
      <h1>About page</h1>
      <p>
        <Link to="/">Home</Link>
      </p>
    </main>
  );
};

export default AboutPage;
