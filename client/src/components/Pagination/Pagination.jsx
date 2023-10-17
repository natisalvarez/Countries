import React from "react";
import style from './Pagination.module.css';

/* Acá se calcula el número total de páginas necesarias para mostrar 
todos los elementos dividiendo cantidad total de elementos cantidad 
de elementos por página) y redondeando hacia arriba usando Math.ceil().
*/

const Pagination = ({ itemsPerPage, totalItems, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  // Si la pagina actual no es la primera, se tiene que renderizar al previous page
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  //si la pagina total no es la primera y es mayor, se tiene que rendarizar el next
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };
  const handlePageClick = (page) => {
    onPageChange(page);
  };

  const handleLastPage = () => {
    onPageChange(totalPages);
  };
  
  return (
        <nav className={style.pagination}>
          {currentPage > 1 && (
            <>
              <button className={style.previousButton} onClick={handlePrevPage}>
                Prev
              </button>
              <button className={style.pageNumber} onClick={ handlePageClick}>
               { currentPage}
              </button>
            </>
          )}
          {currentPage < totalPages && (
            <>
              <button  className={style.nextButton} onClick={handleNextPage}>
                Next 
              </button>
            </>
          )}
        </nav>
      );
    };

    export default Pagination;

// return (
// <nav>
// <a
// href="#"
// className={`${style.previousButton} ${!isFirstPage ? style.showButton : ""}`}
// onClick={handlePrevPage}
// >
// Previous Page
// </a>
// <div className={style.pageNumber}>
// {[...Array(totalPages)].map((_, index) => (
//   <a
//     key={index}
//     className={`${style.pageNumber} ${currentPage === index + 1 ? style.active : ""}`}
//     href="#"
//     onClick={() => handlePageClick(index + 1)}
//   >
//     {index + 1}
//   </a>
// ))}
// </div>
// <a
// href="#"
// className={`${style.nextButton} ${!isLastPage ? style.showButton : ""}`}
// onClick={handleNextPage}
// >
// Next Page
// </a>
// </nav>
// )

