import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTemperaments } from "../actions";
import axios from "axios";
import Validate from "./Validate";

export default function CreateBreed() {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments);

  const [input, setInput] = useState({
    name: "",
    max_height: "",
    min_height: "",
    max_weight: "",
    min_weight: "",
    life_span: "",
    temperaments: [],
  });

  const [errors, setErrors] = useState({});


  function handleInputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    
    setErrors(
      Validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleTempSelect(e) {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);

    setInput({
      ...input,
      temperaments: value,
    });
    console.log(input)
  }

  useEffect(() => {
    dispatch(getTemperaments());
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    try {
      axios({
        method: "post",
        url: "http://localhost:3001/dogs",
        headers: {},
        data: input,
      });
      console.log("sumbited succesfully", input);
      setInput({
        name: "",
        max_height: "",
        min_height: "",
        max_weight: "",
        min_weight: "",
        life_span: "",
        temperaments: [],
      });
    } catch (e) {
      console.log("error");
    }
  }


  return (
    <div>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <h3>Create Breed Form</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleInputChange}
          />
          {errors.name && (<p>{errors.name}</p>)}
        </div>
        <div>
          <label>Min height:</label>
          <input
            type="text"
            name="min_height"
            value={input.min_height}
            onChange={handleInputChange}
          />
          {errors.min_height && (<p>{errors.min_height}</p>)}
          <label>Max height:</label>
          <input
            type="text"
            name="max_height"
            value={input.max_height}
            onChange={handleInputChange}
          />
          {errors.max_height && (<p>{errors.max_height}</p>)}
        </div>
        <div>
          <label>Min weight:</label>
          <input
            type="text"
            name="min_weight"
            value={input.min_weight}
            onChange={handleInputChange}
          />
          {errors.min_weight && (<p>{errors.min_weight}</p>)}
          <label>Max weight:</label>
          <input
            type="text"
            name="max_weight"
            value={input.max_weight}
            onChange={handleInputChange}
          />
          {errors.max_weight && (<p>{errors.max_weight}</p>)}
        </div>
        <div>
          <label>Life Span:</label>
          <input
            type="text"
            name="life_span"
            value={input.life_span}
            onChange={handleInputChange}
          />
          {errors.life_span && (<p>{errors.life_span}</p>)}
        </div>
        <div>
          <label>Temperaments:</label>
          <select
            multiple={true}
            value={input.temperaments}
            onChange={handleTempSelect}
          >
            {temperaments &&
              temperaments.map((el) => {
                return <option value={el.name}>{el.name}</option>;
              })}
          </select>
        </div>
        <div>
          <button type="submit">Create Breed</button>
        </div>
      </form>
    </div>
  );
}
