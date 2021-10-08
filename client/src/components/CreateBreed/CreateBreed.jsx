import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getTemperaments, postBreed } from "../../actions";
import Validate from "../Validate/Validate";
import s from "./CreateBreed.module.css";

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

  function handleDelete(el) {
    setInput({
      ...input,
      temperament: input.temperament.filter((temp) => temp !== el),
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
      <div className={s.top}>
        <Link to="/home" className={s.homeButton}>
          Home
        </Link>
        <p>Create New Breed</p>
      </div>
      <div className={s.form}>
        <div className={s.formContainer}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className={s.name}>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Breed name"
                value={input.name}
                onChange={(e) => handleInputChange(e)}
              />
              {errors.name && <p className={s.error}>{errors.name}</p>}
            </div>
            <div className={s.containerOne}>
              <div>
                <fieldset>
                  <div className={s.height}>
                    <label>Min Height:</label>
                    <input
                      type="text"
                      name="min_height"
                      placeholder="Ex: 24"
                      value={input.min_height}
                      onChange={(e) => handleInputChange(e)}
                    />
                    {errors.min_height && <p className={s.error}>{errors.min_height}</p>}
                  </div>
                  <div>
                    <label>Max Height:</label>
                    <input
                      type="text"
                      name="max_height"
                      placeholder="Ex: 32"
                      value={input.max_height}
                      onChange={(e) => handleInputChange(e)}
                    />
                    {errors.max_height && <p className={s.error}>{errors.max_height}</p>}
                  </div>
                </fieldset>
              </div>
              <div>
                <fieldset>
                  <div className={s.weight}>
                    <label>Min Weight:</label>
                    <input
                      type="text"
                      name="min_weight"
                      placeholder="Ex: 22"
                      value={input.min_weight}
                      onChange={(e) => handleInputChange(e)}
                    />
                    {errors.min_weight && <p className={s.error}>{errors.min_weight}</p>}
                  </div>
                  <div>
                    <label>Max Weight:</label>
                    <input
                      type="text"
                      name="max_weight"
                      placeholder="Ex: 38"
                      value={input.max_weight}
                      onChange={(e) => handleInputChange(e)}
                    />
                    {errors.max_weight && <p className={s.error}>{errors.max_weight}</p>}
                  </div>
                </fieldset>
              </div>
            </div>

            <div className={s.name}>
              <label>Life Span:</label>
              <input
                type="text"
                name="life_span"
                value={input.life_span}
                placeholder="Ex: 10"
                onChange={(e) => handleInputChange(e)}
              />
              {errors.life_span && <p className={s.error}>{errors.life_span}</p>}
            </div>
            <div className={s.name}>
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
                <li className={s.li}>
                  {input.temperament.map((temp) => (
                    <div className={s.temperament}>
                      <p>{temp}</p>
                      <button type="button" onClick={() => handleDelete(temp)}>
                        x
                      </button>
                    </div>
                  ))}
                </li>
              </ul>
            </div>
            <div>
              <button type="submit" class={s.createButton}>Create Breed</button>
            </div>
          </form>
        </div>
        <div className={s.imageContainer}>
          <img
            src="https://images.unsplash.com/photo-1520087619250-584c0cbd35e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1494&q=80"
            alt="not found"
          />
        </div>
      </div>
    </div>
  );
}
