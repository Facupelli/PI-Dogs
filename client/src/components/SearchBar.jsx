import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogsByBreed } from "../actions";

export default function SearchBar ({setCurrentPage}) {
  
  // const allDogs = useSelector((state) => state.dogs);
  const dispatch = useDispatch();


  const [title, setTitle] = useState("");
  
  function handleSearch(e){
      setTitle(e.target.value)

    //BUSQUEDA MIENTRAS SE ESCRIBE
    //   dispatch(getDogsByBreed(title));
    //   setCurrentPage(1);

  };

  function handleSubmit(e){
      e.preventDefault();
      dispatch(getDogsByBreed(title));
      setTitle('');
      setCurrentPage(1);
  };

//   const getDogsByBreed = async() => {
//     console.log(title);
//     return allDogs.filter(d => d.name.includes(title));
//   }
 
  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <div>
          <input
            type="text"
            id="title"
            placeholder='Breed...'
            value={title}
            onChange={(e) => handleSearch(e)}
          />
        </div>
        <button type="submit">SEARCH</button>
      </form>
    </div>
  );
}
