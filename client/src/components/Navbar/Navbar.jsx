import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import s from "./Navbar.module.css";

export default function Navbar({
  setCurrentPage,
  order,
  setOrder,
  handleCleanFilters,
}) {
  return (
    <div>
      <div className={s.navbar}>
        <Link to='/home' className={s.dogApp}>THE DOG APP</Link>

        <SearchBar setCurrentPage={setCurrentPage} />

        <Link to="/createbreed" className={s.createBreed}>CREATE BREED</Link>
      </div>
      
    </div>
  );
}
