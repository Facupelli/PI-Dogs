import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTemperaments } from "../actions";
import axios from "axios";

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
    console.log(input);
  }

  function handleMultipleSelect(e) {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setInput({
      ...input,
      temperaments: value,
    });
    console.log(e.target.selectedOptions);
    console.log(input);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const url = "http://localhost:3001/dogs";
    //   const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ input })
    // };
    try {
      axios({
        method: "post",
        url: url,
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
      console.log("error", e);
    }
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
      <form onSubmit={handleSubmit}>
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
          <label>Min height:</label>
          <input
            type="text"
            name="min_height"
            value={input.min_height}
            onChange={handleChange}
          />
          <label>Max height:</label>
          <input
            type="text"
            name="max_height"
            value={input.max_height}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Min weight:</label>
          <input
            type="text"
            name="min_weight"
            value={input.min_weight}
            onChange={handleChange}
          />
          <label>Max weight:</label>
          <input
            type="text"
            name="max_weight"
            value={input.max_weight}
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
