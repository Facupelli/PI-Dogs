import React from "react";
import s from "./Paginado.module.css";

export default function Paginado({
  dogsPerPage,
  allDogs,
  paginate,
  currentPage,
}) {
  const pageNumbers = [];
  console.log(!pageNumbers);

  for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
    pageNumbers.push(i);
  }

  let prevDisabled, nextDisabled, prevStyle, nextStyle;
  if(!pageNumbers[1]){
    nextStyle = s.disabled;
    prevStyle = s.disabled;
    prevDisabled = true;
    nextDisabled = true;
  }else if(currentPage === 1){
    prevDisabled = true;
    prevStyle = s.disabled;
    nextStyle = s.button;
  }else if(currentPage === pageNumbers[pageNumbers.length - 1]){
    nextDisabled = true;
    nextStyle = s.disabled;
    prevStyle = s.button;
  }else{
    prevDisabled = false;
    nextDisabled = false;
    prevStyle = s.button;
    nextStyle = s.button;
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
      <button onClick={() => paginate(pageNumbers[0])} className={s.button} > 
        first
      </button>
      <button onClick={() => paginate(currentPage - 1)} className={prevStyle} disabled={prevDisabled}>
        prev
      </button>
      <button onClick={() => paginate(currentPage + 1)} className={nextStyle} disabled={nextDisabled}>
        next
      </button>
      <button
        onClick={() => paginate(pageNumbers[pageNumbers.length - 1] )}
        className={s.button}
      >
        last
      </button>
    </div>
  );
}
