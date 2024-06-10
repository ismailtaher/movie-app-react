import React from "react";
import Feed from "./Feed";
import Pages from "./Pages";

const Popular = ({
  popularMovies,
  isPopularLoading,
  popularError,
  genres,
  isGenreLoading,
  genreError,
  currentPage,
  popularTotalPages,
  handlePageChange,
  width,
}) => {
  return (
    <main className="main-style p-3">
      <h2 className="text-2xl md:text-3xl">Popular Movies</h2>
      {isPopularLoading && isGenreLoading && (
        <p className="text-center">Loading Movies...</p>
      )}
      {!isPopularLoading && !isGenreLoading && popularError && (
        <p className="text-rose-900 text-center">{popularError}</p>
      )}
      {!isPopularLoading &&
        !isGenreLoading &&
        !genreError &&
        !popularError &&
        (popularMovies?.length !== 0 ? (
          <>
            <Feed movies={popularMovies} genres={genres} />
            <Pages
              currentPage={currentPage}
              totalPages={popularTotalPages}
              onPageChange={handlePageChange}
              width={width}></Pages>
          </>
        ) : (
          <p className="text-rose-900 text-center">No movies to display</p>
        ))}
    </main>
  );
};

export default Popular;
