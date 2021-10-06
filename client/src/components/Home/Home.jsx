import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../../actions/index";
import Navbar from "../Navbar/Navbar";
import Card from "../Card";
import Paginado from "../Paginado";
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
  };

  useEffect(() => {
    dispatch(getDogs());
  }, []);

  function handleCleanFilters() {
    dispatch(getDogs());
  }

  return (
    <div>
      <div>
        <Navbar
          setCurrentPage={setCurrentPage}
          order={order}
          setOrder={setOrder}
          handleCleanFilters={handleCleanFilters}
        />

        {currentDogs &&
          currentDogs.map((el) => {
            return (
              <div>
                <Card
                  id={el.id}
                  name={el.name}
                  image={el.image}
                  temperament={
                    el.createdInDb
                      ? el.temperaments.map((el) => el.name + ", ")
                      : el.temperament
                  }
                  min_weight={el.min_weight}
                  max_weight={el.max_weight}
                />
              </div>
            );
          })}

        <Paginado
          dogsPerPage={dogsPerPage}
          allDogs={allDogs.length}
          paginado={paginado}
        />
      </div>
    </div>
  );
}
