import React from "react";
import Feed from "./Feed";
import Pages from "./Pages";

const Upcoming = ({
  upcomingMovies,
  isUpcomingLoading,
  upcomingError,
  genres,
  isGenreLoading,
  genreError,
  currentPage,
  upcomingTotalPages,
  handlePageChange,
}) => {
  console.log("Current Page:", currentPage);
  console.log("Total Pages:", upcomingTotalPages);
  return (
    <main className="main-style p-3">
      <h2 className="text-2xl">Upcoming Movies</h2>
      {isUpcomingLoading && isGenreLoading && (
        <p className="text-center">Loading Movies...</p>
      )}
      {!isUpcomingLoading && !isGenreLoading && upcomingError && (
        <p className="text-rose-900 text-center">{upcomingError}</p>
      )}
      {!isUpcomingLoading &&
        !isGenreLoading &&
        !genreError &&
        !upcomingError &&
        (upcomingMovies?.length !== 0 ? (
          <>
            <Feed movies={upcomingMovies} genres={genres} />
            {upcomingTotalPages > 1 && (
              <Pages
                currentPage={currentPage}
                totalPages={upcomingTotalPages}
                onPageChange={handlePageChange}></Pages>
            )}
          </>
        ) : (
          <p className="text-rose-900 text-center">No movies to display</p>
        ))}
    </main>
  );
};

export default Upcoming;
