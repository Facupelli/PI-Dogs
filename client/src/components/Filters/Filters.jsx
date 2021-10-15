import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterCreated,
  getTemperaments,
  filterByTemperament,
  orderByBreed,
  orderByWeight,
} from "../../actions";
import s from "./Filters.module.css";

export default function Filters({setCurrentPage, setOrder, handleCleanFilters,}) {
  
  const dispatch = useDispatch();
  const allTemperaments = useSelector((state) => state.temperaments);

  useEffect(() => {
    dispatch(getTemperaments());
  }, []);

  function handleFilterTemps(e) {
    e.preventDefault();
    dispatch(filterByTemperament(e.target.value));
  }

  function handleFilterCreated(e) {
    e.preventDefault();
    dispatch(filterCreated(e.target.value));
  }

  function handleOrderByBreed(e) {
    e.preventDefault();
    dispatch(orderByBreed(e.target.value));
    setCurrentPage(1);
    setOrder( e.target.value);
  }

  function handleOrderByWeight(e) {
    e.preventDefault();
    dispatch(orderByWeight(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
  }

  return (
    <div className={s.container}>
      <div className={s.filter}>
        <p>Filter by</p>
        <select onChange={(e) => handleFilterTemps(e)} className={s.select}>
          <option value="All">All temperaments</option>
          {allTemperaments &&
            allTemperaments.map((el) => {
              return <option value={el.name}>{el.name}</option>;
            })}
        </select>
        <select onChange={(e) => handleFilterCreated(e)} className={s.select}>
          <option value="all">All breeds</option>
          <option value="api_breed">Api Breed</option>
          <option value="created_breed">Created Breed</option>
        </select>
      </div>
      <div className={s.filter}>
        <p>Order by</p>
        <select onChange={(e) => handleOrderByBreed(e)} className={s.select} allowClear='true'>
          <option value="" disabled selected>
            Breed 
          </option>
          <option value="breed_asc">Ascendant (A-Z)</option>
          <option value="breed_desc">Descendant (Z-A)</option>
        </select>
        <select onChange={(e) => handleOrderByWeight(e)} className={s.select}>
          <option value="" disabled selected>
            Weight 
          </option>
          <option value="weight_asc">Ascendant (- +)</option>
          <option value="weight_desc">Descendant (+ -)</option>
        </select>
      </div>
      <div>
        <button
          type="button"
          onClick={() => handleCleanFilters()}
          className={s.button}
        >
          CLEAR ALL
        </button>
      </div>
    </div>
  );
}
