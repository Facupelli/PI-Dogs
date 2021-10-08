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
      <div className={s.imageContainer}>
        <Link to={"/home/" + id}>
          <img src={picture} alt="not found" />
        </Link>
      </div>
      <div>
        <div className={s.nameContainer}>
          <Link to={"/home/" + id} className={s.name}>
            <p>{name}</p>
          </Link>
        </div>
        <p className={s.temperament}>{temperament}</p>
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
