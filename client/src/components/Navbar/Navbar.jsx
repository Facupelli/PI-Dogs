import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import Filters from "../Filters/Filters";
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
        <p>THE DOG APP</p>

        <SearchBar setCurrentPage={setCurrentPage} />

        <Link to="/createbreed" className={s.createBreed}>CREATE BREED</Link>
      </div>
      <div>
        <Filters
          setCurrentPage={setCurrentPage}
          order={order}
          setOrder={setOrder}
          handleCleanFilters={handleCleanFilters}
        />
      </div>
    </div>
  );
}
