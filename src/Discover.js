import React from "react";
import Feed from "./Feed";
import Pages from "./Pages";
import PCNav from "./PCNav";

const Discover = ({
  movies,
  isLoading,
  fetchError,
  genres,
  isGenreLoading,
  genreError,
  currentPage,
  totalPages,
  handlePageChange,
  width,
  handleCheck,
  genreSearch,
  ratingValue,
  handleSliderChange,
  handleChanges,
}) => {
  return (
    <main className="main-style p-3 2xl:px-44">
      <h2 className="text-2xl xl:py-3 xl:pb-5 xl:text-3xl">Discover Movies</h2>

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
        (movies?.length !== 0 ? (
          <div className="xl:grid xl:grid-cols-8 xl:gap-8 2xl:grid-cols-10">
            {width >= 1280 && (
              <div className="col-span-2">
                <PCNav
                  handleCheck={handleCheck}
                  genreSearch={genreSearch}
                  ratingValue={ratingValue}
                  handleSliderChange={handleSliderChange}
                  notifyChanges={handleChanges}
                />
              </div>
            )}
            <div className="xl:col-start-3 xl:col-span-7 2xl:col-span-8">
              <Feed movies={movies} genres={genres} />
              <Pages
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                width={width}></Pages>
            </div>
          </div>
        ) : (
          <p className="text-rose-900 text-center">No movies to display</p>
        ))}
    </main>
  );
};

export default Discover;
