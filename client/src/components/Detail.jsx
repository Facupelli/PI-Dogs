import react, { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from 'axios';
import { useParams } from "react-router";
const { API_KEY } = process.env;


export default function Detail() {

  const allDogs = useSelector((state) => state.allDogs);

    const {id} = useParams(); 
    console.log(id);
    console.log(allDogs);

    const dogBreed = allDogs.filter(d => d.id === id);
    
    console.log(dogBreed);

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
      <img
        src={dogBreed.image}
        alt="img not found"
        width="200px"
        height="200px"
      />
      <p>{dogBreed.name}</p>
      <p>{dogBreed.temperament}</p>
      <p>Weight</p>
      <div>
        <p>Min: {dogBreed.min_weight} kg </p>
        <p>Max: {dogBreed.max_weight} kg </p>
      </div>
      <p>{dogBreed.height}</p>
      <p>{dogBreed.life_span}</p>
    </div>
  );
}
