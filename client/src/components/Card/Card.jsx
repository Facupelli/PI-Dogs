import React from "react";
import { Link } from "react-router-dom";
import s from "./Card.module.css";

export default function Card({
  id,
  name,
  image,
  temperament,
  min_weight,
  max_weight,
}) {
  let picture;
  if (!image) {
    picture =
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f540ef58358961.59f95102c77f3.jpg";
  } else {
    picture = image;
  }

  return (
    <div className={s.card}>
      <div>
        <Link to={"/home/" + id}>
          <img src={picture} alt="not found" width="200px" height="200px" />
        </Link>
      </div>
      <div>
        <Link to={"/home/" + id}>
          <h3>{name}</h3>
        </Link>
        <h4>{temperament}</h4>
        <div className={s.container}>
          <p className={s.weight}>Weight:</p>
          <p className={s.number}>
            {min_weight} - {max_weight} kg
          </p>
        </div>
      </div>
    </div>
  );
}
