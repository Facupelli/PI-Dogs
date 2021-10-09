import React from "react";
import s from './Paginado.module.css'

export default function Paginado({ dogsPerPage, allDogs, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(allDogs / dogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={s.container}>
      {/* <ul className={s.ul}>
        {pageNumbers &&
          pageNumbers.map((number) => {
            return (
              <li className={s.pageNumber}>
                <a onClick={() => paginate(number)} >{number}</a>
              </li>
            );
          })}
      </ul> */}
      <button onClick={() => paginate(pageNumbers[0])}>first</button>
      <button onClick={() => paginate(currentPage - 1)}>prev</button>
      <button onClick={() => paginate(currentPage + 1)}>next</button>
      <button onClick={() => paginate(pageNumbers[pageNumbers.length - 1] + 1)}>last</button>

    </div>
  );
}
