import React from "react";
import Feed from "./Feed";

const Popular = ({
  movies,
  isPopularLoading,
  popularError,
  genres,
  isGenreLoading,
  genreError,
}) => {
  return (
    <main className="main-style p-3">
      <h2 className="text-2xl">Popular</h2>
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
        (movies.length !== 0 ? (
          <Feed movies={movies} genres={genres} />
        ) : (
          <p className="text-rose-900 text-center">No movies to display</p>
        ))}
    </main>
  );
};

export default Popular;
