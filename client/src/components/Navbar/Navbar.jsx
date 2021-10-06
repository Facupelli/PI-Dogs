import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";
import Filters from "../Filters";

export default function Navbar({
  setCurrentPage,
  order,
  setOrder,
  handleCleanFilters,
}) {

  return (
    <div>
        
      <h1>THE DOG APP</h1>

      <Link to="/createbreed">Crear Raza</Link>

      <SearchBar setCurrentPage={setCurrentPage} />

      <Filters
        setCurrentPage={setCurrentPage}
        order={order}
        setOrder={setOrder}
        handleCleanFilters={handleCleanFilters}
      />
    </div>
  );
}
