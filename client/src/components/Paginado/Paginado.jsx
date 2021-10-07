import React from "react";
import s from './Paginado.module.css'

export default function Paginado({ dogsPerPage, allDogs, paginado }) {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(allDogs / dogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={s.container}>
      <ul className={s.ul}>
        {pageNumbers &&
          pageNumbers.map((number) => {
            return (
              <li className={s.pageNumber}>
                <a onClick={() => paginado(number)} >{number}</a>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
