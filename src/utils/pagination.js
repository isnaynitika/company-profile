import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const maxPagesToShow = 3;

  const renderPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages > maxPagesToShow) {
      let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
      let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

      if (endPage - startPage < maxPagesToShow - 1) {
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
      }

      if (startPage > 1) {
        pageNumbers.push(
          <button key={1} onClick={() => onPageChange(1)} className="px-4 py-2 text-red-500">
            1
          </button>
        );
        if (startPage > 2) {
          pageNumbers.push(
            <span key="ellipsis1" className="px-4 py-2 text-red-500">
              ...
            </span>
          );
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => onPageChange(i)}
            disabled={currentPage === i}
            className={`${
              currentPage === i
                ? "bg-red-500 text-white font-semibold rounded-md mr-2 px-4 py-2"
                : ""
            } px-4 py-2 text-red-500  `}
          >
            {i}
          </button>
        );
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pageNumbers.push(
            <span key="ellipsis2" className="px-4 py-2 text-red-500">
              ...
            </span>
          );
        }
        pageNumbers.push(
          <button
            key={totalPages}
            onClick={() => onPageChange(totalPages)}
            className="px-4 py-2 text-red-500"
          >
            {totalPages}
          </button>
        );
      }
    } else {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => onPageChange(i)}
            disabled={currentPage === i}
            className={`${
              currentPage === i
                ? "bg-red-500 text-white font-semibold rounded-md mr-2 px-4 py-2"
                : ""
            } px-4 py-2 text-red-500  `}
          >
            {i}
          </button>
        );
      }
    }

    return pageNumbers;
  };

  return (
    <div>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2    disabled:opacity-60 "
      >
        <FontAwesomeIcon icon={faChevronLeft} className="text-red-500 text-bold" />
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2    disabled:opacity-60 "
      >
        <FontAwesomeIcon icon={faChevronRight} className="text-red-500 text-bold" />
      </button>
    </div>
  );
};

export default Pagination;
