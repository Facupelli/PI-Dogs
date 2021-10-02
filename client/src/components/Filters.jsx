import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterCreated, getTemperaments, filterByTemperament, orderByBreed, orderByWeight } from "../actions";
// import axios from 'axios'

export default function Filters({setCurrentPage, order, setOrder}) {


    const dispatch = useDispatch();
    const allTemperaments = useSelector((state) => state.temperaments);

    useEffect(() => {
        dispatch(getTemperaments()); 
      }, []);

    function handleFilterTemps(e){
      e.preventDefault();
        dispatch(filterByTemperament(e.target.value));
    }

    function handleFilterCreated(e){
      e.preventDefault();
      dispatch(filterCreated(e.target.value));
    }

    function handleOrderByBreed(e){
      e.preventDefault();
      dispatch(orderByBreed(e.target.value));
      setCurrentPage(1);
      setOrder(`Ordenado ${e.target.value}`)
    }

    function handleOrderByWeight(e){
      e.preventDefault();
      dispatch(orderByWeight(e.target.value));
      setCurrentPage(1);
      setOrder(`Ordenado ${e.target.value}`)
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
      <select onChange={e => handleFilterCreated(e)} >
        <option value="api_breed">Api Breed</option>
        <option value="created_breed">Created Breed</option>
      </select>
      <select onChange={e => handleOrderByBreed(e)} >
        <option value="breed_asc">Breed Ascendente</option>
        <option value="breed_desc">Breed Descendente</option>
      </select>
      <select onChange={e => handleOrderByWeight(e)} >
        <option value="weight_asc">Weight Ascendente</option>
        <option value="weight_desc">Weight Descendente</option>
      </select>
    </div>
  );
}
