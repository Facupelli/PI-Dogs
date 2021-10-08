import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../../actions/index";
import Navbar from "../Navbar/Navbar";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";
import Loading from "../Loading/Loading";
import Filters from "../Filters/Filters";
import s from "./Home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs); //es lo mismo que hacer mapStateToProps, me traigo todo lo que esta en el estado de dogs
  //paginado front
  const [currentPage, setCurrentPage] = useState(1); //arranco en la pagina 1
  const [dogsPerPage, setDogsPerPage] = useState(8); //cuantos perros por pagina

  const [order, setOrder] = useState("");

  const lastDog = currentPage * dogsPerPage;
  const firstDog = lastDog - dogsPerPage;
  const currentDogs = allDogs.slice(firstDog, lastDog); //me trae del reducer el state

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    dispatch(getDogs());
  }, []);

  function handleCleanFilters() {
    dispatch(getDogs());
  }

  return (
    <div>
      {currentDogs.length > 0 ? (
        <div>
          <div>
            <Navbar
              setCurrentPage={setCurrentPage}
              setOrder={setOrder}
              handleCleanFilters={handleCleanFilters}
            />
          </div>
          <div>
            <Filters
              setCurrentPage={setCurrentPage}
              order={order}
              setOrder={setOrder}
              handleCleanFilters={handleCleanFilters}
            />
          </div>
          <div className={s.dogs}>
            {currentDogs &&
              currentDogs.map((el) => {
                return (
                  <div className={s.card}>
                    <Card
                      id={el.id}
                      name={el.name}
                      image={el.image}
                      temperament={
                        el.createdInDb
                          ? el.temperaments.map((el) => el.name + ", ")
                          : el.temperament
                      }
                      weight={el.weight}
                    />
                  </div>
                );
              })}
          </div>
          <div className={s.paginado}>
            <Paginado
              dogsPerPage={dogsPerPage}
              allDogs={allDogs.length}
              paginado={paginado}
            />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
