import React from "react";
import { Link } from "react-router-dom";

export default function Navber() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/videos">Videos</Link>
    </nav>
  );
}
