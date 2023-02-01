import React from "react";
import classes from "./Paginator.module.scss";

const Paginator = ({ currentPage, setCurrentPage, users }) => {
  // useEffect(() => {
  //   pagesArray = getPagination();
  // }, [currentPage]);

  const getPagination = () => {
    const pagesCount = users.usersCount / users.usersOnPage;
    const pages = [];
    for (let i = 1; i < pagesCount + 1; i++) {
      pages.push(i);
    }
    return pages;
  };

  let pagesArray = getPagination();

  return (
    <div className={classes.allPages}>
      {pagesArray.map((p, i) => (
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
    </div>
  );
};

export default Paginator;
