import React from "react";

const Pages = ({ currentPage, totalPages, onPageChange, width }) => {
  const pages = [...Array(totalPages).keys()].map((n) => n + 1);
  let maxVisibleButtons = 5;
  if (width > 640) {
    maxVisibleButtons = 10;
  }

  const getVisiblePages = () => {
    const start = Math.max(0, currentPage - Math.ceil(maxVisibleButtons / 2));
    const end = Math.min(totalPages, start + maxVisibleButtons);
    return pages.slice(start, end);
  };

  return (
    <div className="flex justify-center items-center space-x-1 mt-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-2 bg-white text-black border border-emerald-500 rounded-full hover:bg-emerald-400 hover:text-white transition-colors duration-300">
        &larr;
      </button>
      {getVisiblePages().map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          disabled={page === currentPage}
          className={`px-2 h-7 border rounded-full ${
            page === currentPage
              ? "bg-emerald-500 text-white"
              : "bg-white text-black border-black"
          }hover:bg-emerald-400 hover-text-white transition-colors duration-300`}>
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-2 bg-white text-black border border-emerald-500 rounded-full hover:bg-emerald-400 hover:text-white transition-colors duration-300">
        &rarr;
      </button>
    </div>
  );
};

export default Pages;
