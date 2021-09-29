import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function () {
  
  const allDogs = useSelector((state) => state.dogs);

  const [title, setTitle] = useState("");
  
  function handleSearch(e){
      setTitle(e.target.value)
  };

  function handleSubmit(e){
      e.preventDefault();
      getDogsByBreed(title)
  };

  const getDogsByBreed = async() => {
    console.log(title);
    return allDogs.filter(d => d.name.includes(title));
  }
 
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
