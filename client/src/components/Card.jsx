import React from "react";
import { Link } from "react-router-dom";

export default function Card({
  id,
  name,
  image,
  temperament,
  temperaments,
  min_weight,
  max_weight,
}) {

  let picture;
  if(!image){
    picture = 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f540ef58358961.59f95102c77f3.jpg';
  }else{
    picture = image;
  }

  return (
    <div>
      <Link to={"/home/" + id}>
        <img src={picture} alt="not found" width="200px" height="200px" />
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
