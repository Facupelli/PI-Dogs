import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogsByBreed } from "../../actions";
import s from "./SearchBar.module.css";

export default function SearchBar({ setCurrentPage }) {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");

  function handleSearch(e) {
    setTitle(e.target.value);

    //BUSQUEDA MIENTRAS SE ESCRIBE
    // dispatch(getDogsByBreed(title));
    // setCurrentPage(1);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(await getDogsByBreed(title));
    setTitle("");
    setCurrentPage(1);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={s.searchbar}>
          <input
            type="text"
            id="title"
            placeholder="Breed..."
            value={title}
            onChange={(e) => handleSearch(e)}
            className={s.input}
          />
          <button type="submit" className={s.button}>SEARCH</button>
        </div>
      </form>
    </div>
  );
}
