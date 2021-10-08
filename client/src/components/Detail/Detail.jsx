import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getDetail, cleanDetail } from "../../actions";
import { Link } from "react-router-dom";
import s from "./Detail.module.css";
import Loading from "../Loading/Loading";

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(cleanDetail());
    }
  }, [])

  const dog = useSelector((state) => state.detail);
  const url =
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f540ef58358961.59f95102c77f3.jpg";

  return (
    <div>
      {dog.length > 0 ? (
        <div className={s.detail}>
          <div className={s.imageContainer}>
            <img
              src={dog[0].image ? dog[0].image : url}
              alt="img not found"
            />
          </div>
          <div className={s.infoContainer}>
            <p className={s.name}>{dog[0].name}</p>
            <p className={s.temperament}>
              {!dog[0].createdInDb
                ? dog[0].temperament
                : dog[0].temperaments.map((el) => el.name + ", ")}
            </p>
            <div className={s.measuresContainer}>
              <p className={s.measure}>Weight:</p>
              <p className={s.measure}>
                {dog[0].weight} kg
              </p>
            </div>
            <div className={s.measuresContainer}>
              <p className={s.measure}>Height:</p>
              <p className={s.measure}>
                {dog[0].height} cm
              </p>
            </div>
            <div className={s.measuresContainer}>
              <p className={s.measure}>Life Span:</p>
              <p className={s.measure}>
                {dog[0].createdInDb
                  ? dog[0].life_span + " years"
                  : dog[0].life_span}
              </p>
            </div>
            <div className={s.buttonDiv}>
              <Link to="/home" className={s.button}> 
                Home
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <Loading/>
      )}
    </div>
  );
}
