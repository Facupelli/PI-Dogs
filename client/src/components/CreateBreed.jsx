import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTemperaments } from "../actions";

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

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(input)
  }

  function handleMultipleSelect(e) {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setInput({
      ...input,
      temperaments: value,
    });
    console.log(e.target.selectedOptions)
    console.log(input)
  }

  useEffect(() => {
    dispatch(getTemperaments());
  }, []);

  return (
    <div>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <h3>Create Breed Form</h3>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Max height:</label>
          <input
            type="text"
            name="max_height"
            value={input.max_height}
            onChange={handleChange}
          />
          <label>Min height:</label>
          <input
            type="text"
            name="min_height"
            value={input.min_height}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Max weight:</label>
          <input
            type="text"
            name="max_weight"
            value={input.max_weight}
            onChange={handleChange}
          />
          <label>Min weight:</label>
          <input
            type="text"
            name="min_weight"
            value={input.min_weight}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Life Span:</label>
          <input
            type="text"
            name="life_span"
            value={input.life_span}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Temperaments:</label>
          <select
            multiple={true}
            value={input.temperaments}
            onChange={handleMultipleSelect}
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
