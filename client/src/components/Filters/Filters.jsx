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

export default function Filters({
  setCurrentPage,
  setOrder,
  handleCleanFilters,
}) {
  const dispatch = useDispatch();
  const allTemperaments = useSelector((state) => state.temperaments);

  useEffect(() => {
    dispatch(getTemperaments());
    // eslint-disable-next-line
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
    setOrder(e.target.value);
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
              return <option value={el.name} key={Math.random()} >{el.name}</option>;
            })}
        </select>
        <select onChange={(e) => handleFilterCreated(e)} className={s.select}>
          <option value="all" key='all' >All breeds</option>
          <option value="api_breed" key='api_breed' >Api Breed</option>
          <option value="created_breed" key='created_breed' >Created Breed</option>
        </select>
      </div>
      <div className={s.filter}>
        <p>Order by</p>
        <select
          onChange={(e) => handleOrderByBreed(e)}
          defaultValue="Breed"
          className={s.select}
          allowclear="true"
        >
          {/* <option value="" disabled selected>
            Breed
          </option> */}
          <option value="breed_asc" key='breed_asc' >Ascendant (A-Z)</option>
          <option value="breed_desc" key='breed_desc' >Descendant (Z-A)</option>
        </select>
        <select
          onChange={(e) => handleOrderByWeight(e)}
          defaultValue="Weight"
          className={s.select}
        >
          {/* <option value="" disabled selected>
            Weight
          </option> */}
          <option value="weight_asc" key='weight_asc' >Ascendant (- +)</option>
          <option value="weight_desc" key='weight_desc' >Descendant (+ -)</option>
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
