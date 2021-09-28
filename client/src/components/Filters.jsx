import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments } from "../actions";
import { filterByTemperament } from "../actions";
import axios from 'axios'

export default function Filters() {


    const dispatch = useDispatch();
    const allTemperaments = useSelector((state) => state.temperaments);

    useEffect(() => {
        dispatch(getTemperaments()); 
      }, []);

    function handleFilterTemps(e){
        dispatch(filterByTemperament(e.target.value));
    }

    // async function temperaments() {
    //   let allTemperaments = await axios('http://localhost:3001/temperament');
    //   let temps = allTemperaments.data;
    //   return temps;
    // }

  return (
    <div>
      <select onChange={e => handleFilterTemps(e)} >
          <option value='All' >All</option>
        {allTemperaments &&
        allTemperaments.map(el => {
            return(
                <option value={el.name} >{el.name}</option>
            )
        })}
      </select>
      <select>
        <option value="Raza">Breed</option>
        <option value="created">Created Breed</option>
      </select>
      <select>
        <option value="raza_asc">Breed Ascendente</option>
        <option value="raza_desc">Breed Descendente</option>
      </select>
      <select>
        <option value="peso_asc">Weight Ascendente</option>
        <option value="peso_desc">Weight Descendente</option>
      </select>
    </div>
  );
}
