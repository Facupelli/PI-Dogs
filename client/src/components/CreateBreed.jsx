import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getTemperaments, postBreed } from "../actions";
import Validate from "./Validate";

export default function CreateBreed() {
  const dispatch = useDispatch();
  const history = useHistory(); // te lleva a una ruta especifica
  const temperaments = useSelector((state) => state.temperaments);

  const [input, setInput] = useState({
    name: "",
    max_height: "",
    min_height: "",
    max_weight: "",
    min_weight: "",
    life_span: "",
    temperament: [],
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
    setInput({
      ...input,
      temperament: [...input.temperament, e.target.value],
    });
  }

  function handleDelete(el){
    setInput({
      ...input,
      temperament: input.temperament.filter(temp => temp !== el)
    });
  }

  useEffect(() => {
    dispatch(getTemperaments());
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    try {
      dispatch(postBreed(input));
      alert("Breed created!");
      setInput({
        name: "",
        max_height: "",
        min_height: "",
        max_weight: "",
        min_weight: "",
        life_span: "",
        temperament: [],
      });
      history.push("/home"); // redirigimos al home
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
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={(e) => handleInputChange(e)}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label>Min height:</label>
          <input
            type="text"
            name="min_height"
            value={input.min_height}
            onChange={(e) => handleInputChange(e)}
          />
          {errors.min_height && <p>{errors.min_height}</p>}
          <label>Max height:</label>
          <input
            type="text"
            name="max_height"
            value={input.max_height}
            onChange={(e) => handleInputChange(e)}
          />
          {errors.max_height && <p>{errors.max_height}</p>}
        </div>
        <div>
          <label>Min weight:</label>
          <input
            type="text"
            name="min_weight"
            value={input.min_weight}
            onChange={(e) => handleInputChange(e)}
          />
          {errors.min_weight && <p>{errors.min_weight}</p>}
          <label>Max weight:</label>
          <input
            type="text"
            name="max_weight"
            value={input.max_weight}
            onChange={(e) => handleInputChange(e)}
          />
          {errors.max_weight && <p>{errors.max_weight}</p>}
        </div>
        <div>
          <label>Life Span:</label>
          <input
            type="text"
            name="life_span"
            value={input.life_span}
            onChange={(e) => handleInputChange(e)}
          />
          {errors.life_span && <p>{errors.life_span}</p>}
        </div>
        <div>
          <label>Temperaments:</label>
          <select
            // multiple={true}
            value={input.temperament}
            onChange={(e) => handleTempSelect(e)}
          >
            {temperaments &&
              temperaments.map((el) => {
                return <option value={el.name}>{el.name}</option>;
              })}
          </select>
          <ul>
            <li>
              {input.temperament.map((temp) => (
                <div>
                  <p>{temp}</p>
                  <button type='button' onClick={() => handleDelete(temp)} >x</button>
                </div>
              ))}
            </li>
          </ul>
        </div>
        <div>
          <button type="submit">Create Breed</button>
        </div>
      </form>
    </div>
  );
}
