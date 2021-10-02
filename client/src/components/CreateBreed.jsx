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
          <input type="text" name="name" value={input.name} />
        </div>
        <div>
          <label>Max height:</label>
          <input type="text" name="max_height" value={input.max_height}/>
          <label>Min height:</label>
          <input type="text" name="min_height" value={input.min_height}/>
        </div>
        <div>
          <label>Max weight:</label>
          <input type="text" name="max_weight" value={input.max_weight} />
          <label>Min weight:</label>
          <input type="text" name="min_weight" value={input.min_weight} />
        </div>
        <div>
          <label>Life Span:</label>
          <input type="text" name="life_span" value={input.life_span} />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
