import React from "react";
import Feed from "./Feed";
import Pages from "./Pages";

const TopRated = ({
  topRatedMovies,
  isTopRatedLoading,
  topRatedError,
  genres,
  isGenreLoading,
  genreError,
  currentPage,
  totalPages,
  handlePageChange,
}) => {
  return (
    <main className="main-style p-3">
      <h2 className="text-2xl">Top Rated Movies</h2>
      {isTopRatedLoading && isGenreLoading && (
        <p className="text-center">Loading Movies...</p>
      )}
      {!isTopRatedLoading && !isGenreLoading && topRatedError && (
        <p className="text-rose-900 text-center">{topRatedError}</p>
      )}
      {!isTopRatedLoading &&
        !isGenreLoading &&
        !genreError &&
        !topRatedError &&
        (topRatedMovies?.length !== 0 ? (
          <>
            <Feed movies={topRatedMovies} genres={genres} />
            <Pages
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}></Pages>
          </>
        ) : (
          <p className="text-rose-900 text-center">No movies to display</p>
        ))}
    </main>
  );
};

export default TopRated;
