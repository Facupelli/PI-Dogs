import React from "react";
import { Link } from "react-router-dom";

export default function Card({
  id,
  name,
  image,
  temperament,
  min_weight,
  max_weight,
}) {
  return (
    <div>
      <Link to={"/home/" + id}>
        <img src={image} alt="img not found" width="200px" height="200px" />
        <h3>{name}</h3>
      </Link>
      <h4>{temperament}</h4>
      <h4>Weight</h4>
      <div>
        <p>Min: {min_weight} kg </p>
        <p>Max: {max_weight} kg </p>
      </div>
    </div>
  );
}
