import React, { useState } from "react";
import classes from "./Paginator.module.scss";

const Paginator = ({
  currentPage,
  setCurrentPage,
  users,
  portionSize = 10,
  pagesCount,
}) => {
  // useEffect(() => {
  //   pagesArray = getPagination();
  // }, [currentPage]);

  const getPagination = () => {
    const pages = [];
    for (let i = 1; i < pagesCount + 1; i++) {
      pages.push(i);
    }
    return pages;
  };

  let pagesArray = getPagination();
  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={classes.allPages}>
      <button
        className={`${classes.pagination} ${classes.arrows}`}
        onClick={() => setPortionNumber(1)}
      >
        {"<<"}
      </button>
      {portionNumber > 1 && (
        <button
          className={`${classes.pagination} ${classes.arrows}`}
          onClick={() => setPortionNumber(portionNumber - 1)}
        >
          {"<"}
        </button>
      )}
      {pagesArray
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p, i) => (
          <span
            className={`${classes.pagination} ${
              currentPage === p ? classes.currentPage : ""
            }`}
            key={i}
            onClick={() => setCurrentPage(p)}
          >
            {p}
          </span>
        ))}
      {portionCount > portionNumber && (
        <button
          className={`${classes.pagination} ${classes.arrows}`}
          onClick={() => setPortionNumber(portionNumber + 1)}
        >
          {">"}
        </button>
      )}
      <button
        className={`${classes.pagination} ${classes.arrows}`}
        onClick={() => setPortionNumber(pagesCount / portionSize)}
      >
        {">>"}
      </button>
    </div>
  );
};

export default Paginator;
