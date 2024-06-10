import React from "react";
import Feed from "./Feed";

const Discover = ({
  movies,
  isLoading,
  fetchError,
  genres,
  isGenreLoading,
  genreError,
}) => {
  return (
    <main className="main-style p-3">
      <h2 className="text-2xl">Discover</h2>
      {isLoading && isGenreLoading && (
        <p className="text-center">Loading Movies...</p>
      )}
      {!isLoading && !isGenreLoading && fetchError && (
        <p className="text-rose-900 text-center">{fetchError}</p>
      )}
      {!isLoading &&
        !isGenreLoading &&
        !genreError &&
        !fetchError &&
        (movies.length !== 0 ? (
          <Feed movies={movies} genres={genres} />
        ) : (
          <p className="text-rose-900 text-center">No movies to display</p>
        ))}
    </main>
  );
};

export default Discover;
