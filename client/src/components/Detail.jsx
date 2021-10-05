import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getDetail } from "../actions";
import {Link} from 'react-router-dom';

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch]);

  const dog = useSelector((state) => state.detail);

  const url = "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f540ef58358961.59f95102c77f3.jpg";

  return (
    <div>
      {dog.length > 0 ? (
        <div>
          <h3>CARD DETAIL</h3>
          <p>Breed:</p>
          <p>{dog[0].name}</p>
          <img
            src={dog[0].image ? dog[0].image : url}
            alt="img not found"
            width="200px"
            height="200px"
          />
          <p>Temperament:</p>
          <p>{!dog[0].createdInDb ?  dog[0].temperament : dog[0].temperaments.map(el => el.name + (', '))}</p>
          <p>Weight:</p>
          <div>
            <p>Min: {dog[0].min_weight} kg </p>
            <p>Max: {dog[0].max_weight} kg </p>
          </div>
          <p>Height:</p>
          <p>Min: {dog[0].min_height}</p>
          <p>Max: {dog[0].max_height}</p>
          <p>Life Span:</p>
          <p>{dog[0].life_span}</p>
        </div>
      ) : (
        <div>loading...</div>
      )}
      <Link to='/home'>Home</Link>
    </div>

  );
}
