import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

export default function Detail() {
  const allOfDogs = useSelector((state) => state.allDogs);

  const { id } = useParams();

  const dogBreed = allOfDogs.filter((d) => d.id === Number(id));

  return (
    <div>
      <h3>CARD DETAIL</h3>
      <p>Breed:</p>
      <p>{dogBreed[0].name}</p>
      <img
        src={dogBreed[0].image}
        alt="img not found"
        width="200px"
        height="200px"
      />
      <p>Temperament:</p>
      <p>{dogBreed[0].temperament}</p>
      <p>Weight</p>
      <div>
        <p>Min: {dogBreed[0].min_weight} kg </p>
        <p>Max: {dogBreed[0].max_weight} kg </p>
      </div>
      <p>Height:</p>
      <p>{dogBreed[0].height}</p>
      <p>Life Span:</p>
      <p>{dogBreed[0].life_span}</p>
    </div>
  );
}
