import React from "react";
import Feed from "./Feed";

const TopRated = ({
  topRatedMovies,
  isTopRatedLoading,
  topRatedError,
  genres,
  isGenreLoading,
  genreError,
}) => {
  return (
    <main className="main-style p-3">
      <h2 className="text-2xl">Top Rated</h2>
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
        (topRatedMovies.length !== 0 ? (
          <Feed movies={topRatedMovies} genres={genres} />
        ) : (
          <p className="text-rose-900 text-center">No movies to display</p>
        ))}
    </main>
  );
};

export default TopRated;
