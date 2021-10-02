import react, { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from 'axios';
import { useParams } from "react-router";
const { API_KEY } = process.env;


export default function Detail() {

  const allOfDogs = useSelector((state) => state.allDogs);

    const {id} = useParams(); 
    console.log(typeof id);
    console.log(allOfDogs);

    const dogBreed = allOfDogs.filter(d => d.id === Number(id));
    console.log(dogBreed);
    console.log(dogBreed[0].name);

    // const dogDetail = async() => {
    //     const dog = axios(`https://api.thedogapi.com/v1/breeds/search?q=${dogBreed}?api_key=${API_KEY}`);
    //     return {
    //         name: dog.name,
    //         image: dog.image.url,
    //         temperament: dog.temperament,
    //         life_span: dog.life_span,
    //         min_weight: Number(dog.weight.metric.split(' - ')[0]),
    //         max_weight: Number(dog.weight.metric.split(' - ')[1]),
    //         height: dog.height.metric,
    //         id: dog.id,
    //       };
    // }

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
