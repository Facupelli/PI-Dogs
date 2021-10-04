import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

export default function Detail() {
  const allDogs = useSelector((state) => state.allDogs);

  const { id } = useParams();
  const regExp = /[a-zA-Z]/g;

  let dogBreed;
  let image;

  if(regExp.test(id)){
    dogBreed = allDogs.filter((d) => d.id === id);
    image = 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f540ef58358961.59f95102c77f3.jpg';
  }else{
    dogBreed = allDogs.filter((d) => d.id === Number(id));
    image = dogBreed[0].image;
  }

  return (
    <div>
      <h3>CARD DETAIL</h3>
      <p>Breed:</p>
      <p>{dogBreed[0].name}</p>
      <img
        src={image}
        alt="img not found"
        width="200px"
        height="200px"
      />
      <p>Temperament:</p>
      <p>{dogBreed[0].temperament}</p>
      <p>Weight:</p>
      <div>
        <p>Min: {dogBreed[0].min_weight} kg </p>
        <p>Max: {dogBreed[0].max_weight} kg </p>
      </div>
      <p>Height:</p>
      <p>Min: {dogBreed[0].min_height}</p>
      <p>Max: {dogBreed[0].max_height}</p>
      <p>Life Span:</p>
      <p>{dogBreed[0].life_span}</p>
    </div>
  );
}
