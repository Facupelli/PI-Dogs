import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <h1>LandingPage</h1>
      <h2>Welcome to the Dog App</h2>
      <Link to="/home">
        <button>Ingresar</button>
      </Link>
    </div>
  );
}
