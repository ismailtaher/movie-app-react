import React from "react";

const Pages = ({ currentPage, totalPages, onPageChange, width }) => {
  if (!totalPages) {
    console.error("Total Pages Undefined or zero");
    return null;
  }

  const pages = [...Array(totalPages).keys()].map((n) => n + 1);
  let maxVisibleButtons = 5;
  if (width > 640) {
    maxVisibleButtons = 10;
  }

  const getVisiblePages = () => {
    let start = Math.max(0, currentPage - Math.ceil(maxVisibleButtons / 2));
    let end = Math.min(totalPages, start + maxVisibleButtons);

    if (end - start < maxVisibleButtons) {
      start = Math.max(0, end - maxVisibleButtons);
    }
    console.log(`Current Page: ${currentPage}, Total Pages: ${totalPages}`);
    console.log(`Visible Pages: ${pages.slice(start, end)}`);

    return pages.slice(start, end);
  };

  return (
    <div className="flex flex-col justify-center items-center space-x-1 mt-4">
      <div className="flex justify-center items-center space-x-1 mb-2">
        {width >= 768 && (
          <button
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}
            className="px-3 py-2 bg-white text-black border border-emerald-500 rounded-full hover:bg-emerald-400 hover:text-white transition-colors duration-300">
            First
          </button>
        )}
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
        {width >= 768 && (
          <button
            onClick={() => onPageChange(totalPages)}
            disabled={currentPage === totalPages}
            className="px-3 py-2 bg-white text-black border border-emerald-500 rounded-full hover:bg-emerald-400 hover:text-white transition-colors duration-300">
            Last
          </button>
        )}
      </div>
      {width < 768 && (
        <div className="flex space-x-3">
          <button
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}
            className="px-3 py-2 bg-white text-black border border-emerald-500 rounded-full hover:bg-emerald-400 hover:text-white transition-colors duration-300">
            First Page
          </button>
          <button
            onClick={() => onPageChange(totalPages)}
            disabled={currentPage === totalPages}
            className="px-3 py-2 bg-white text-black border border-emerald-500 rounded-full hover:bg-emerald-400 hover:text-white transition-colors duration-300">
            Last Page
          </button>
        </div>
      )}
      <span className="px-3 py-2 text-black">Total Pages: {totalPages}</span>
    </div>
  );
};

export default Pages;
