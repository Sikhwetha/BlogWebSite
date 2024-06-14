import React from "react";

const Pagination = ({ onPageChange, currentpage, blogs, pageSize }) => {
  const totalPages = blogs ? Math.ceil(blogs.length / pageSize) : 0;

  const renderPaginationLinks = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1).map(
      (pageNumber) => (
        <li
          className={pageNumber === currentpage ? "activePagination" : ""}
          key={pageNumber}
        >
          <a href="#" onClick={(e) => {
            e.preventDefault();
            onPageChange(pageNumber);
          }}>
            {pageNumber}
          </a>
        </li>
      )
    );
  };

  return (
    <div className="flex-wrap">
      <ul className="pagination flex-wrap my-8 gap-4">
        <li>
          <button
            onClick={() => onPageChange(currentpage - 1)}
            disabled={currentpage === 1}
          >
            Previous
          </button>
        </li>
        <div className="text-wrap"> {renderPaginationLinks()}</div>
        <li>
          <button
            onClick={() => onPageChange(currentpage + 1)}
            disabled={currentpage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
