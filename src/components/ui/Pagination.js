import React, { useState } from "react";
import { useLocation } from "react-router";
import Characters from "../cast/Characters";
import Episodes from "../cast/Episodes";
import Deaths from "../cast/Deaths";
import Quotes from "../cast/Quotes";

const Pagination = ({ items, isLoading }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  //limit pagination
  const [pageNumberLimit, setPageNumberLimit] = useState(4);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(4);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  //handleClick
  const handleClick = (e) => {
    setCurrentPage(Number(e.target.id));
  };

  const pages = [];
  for (let i = 1; i < Math.ceil(items.length / itemsPerPage); i++) {
    pages.push(i);
  }
  //handle Load MORE

  const handleLoadMore = () => {
    setItemsPerPage(itemsPerPage + 4);
  };
  //slicing data

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  //pages buttons
  const renderPageNumber = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage == number ? "active" : "?"}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  //handle next

  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevBtn = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit == 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  //inc and dec buttons
  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextBtn}>&hellip;</li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevBtn}>&hellip;</li>;
  }

  const location = useLocation();

  return (
    <>
      {location.pathname === "/" && (
        <Characters items={currentItems} isLoading={isLoading} />
      )}
      {location.pathname === "/episodes" && (
        <Episodes items={currentItems} isLoading={isLoading} />
      )}
      {location.pathname === "/deaths" && (
        <Deaths items={currentItems} isLoading={isLoading} />
      )}
      {location.pathname === "/quotes" && (
        <Quotes items={currentItems} isLoading={isLoading} />
      )}
      <ul className="pageNumbers">
        <li>
          <button
            onClick={handlePrevBtn}
            disable={currentPage == pages[0] ? "true" : "false"}
          >
            Prev
          </button>
        </li>
        {pageDecrementBtn}
        {renderPageNumber}
        {pageIncrementBtn}
        <li>
          <button
            onClick={handleNextBtn}
            disable={currentPage == pages[pages.length - 1] ? "true" : "false"}
          >
            Next
          </button>
        </li>
      </ul>

      <div className="cont">
        <button className="loadMore" onClick={handleLoadMore}>
          Load More
        </button>
      </div>
    </>
  );
};

export default Pagination;
