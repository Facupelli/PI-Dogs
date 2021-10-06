import React from "react";
import { Link } from "react-router-dom";
import s from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className={s.background}>
      <div className={s.welcome}>
        <p>Welcome to the</p>
        <h1>DOG APP</h1>
        <Link to="/home">
          <button>INGRESAR</button>
        </Link>
      </div>
    </div>
  );
}
