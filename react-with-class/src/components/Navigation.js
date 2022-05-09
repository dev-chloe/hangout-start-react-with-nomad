import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <header>
      <nav>
        <Link to="/">Homw</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  )
}

export default Navigation;