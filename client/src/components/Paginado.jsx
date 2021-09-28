import React from "react";

export default function Paginado({ dogsPerPage, allDogs, paginado }) {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(allDogs / dogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers &&
          pageNumbers.map((number) => {
            return (
              <li>
                <a onClick={() => paginado(number)}>{number}</a>
              </li>
            );
          })}
      </ul>
    </nav>
  );
}
