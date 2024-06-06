import React, { useRef } from "react";
import HomePosts from "./HomePosts";

const HomeFeed = ({ movies, genres, width }) => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: 0,
        left: -800,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: 0,
        left: 800,
        behavior: "smooth",
      });
    }
  };

  console.log(movies);
  return (
    <div className="relative">
      {width > 640 && (
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 w-12 h-12 transform -translate-y-1/2 bg-[#1A936F] text-white p-2 rounded-full z-10">
          &#8249;
        </button>
      )}
      <div
        ref={scrollContainerRef}
        className="flex space-x-3 overflow-x-scroll scroll-smooth">
        {movies?.map((movie) => (
          <HomePosts key={movie.id} movie={movie} genres={genres} />
        ))}
      </div>
      {width > 640 && (
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 w-12 h-12 transform -translate-y-1/2 bg-[#1A936F] text-white p-2 rounded-full z-10">
          &#8250;
        </button>
      )}
    </div>
  );
};

export default HomeFeed;
