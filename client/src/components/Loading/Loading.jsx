import React from "react";
import Navbar from "../Navbar/Navbar";
import s from './Loading.module.css';

export default function Loading() {
  return (
    <div>
      <Navbar />
      <div className={s.loading}></div>
    </div>
  );
}
