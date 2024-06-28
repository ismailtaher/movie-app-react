import React from "react";
import Feed from "./Feed";
import Pages from "./Pages";
import PCNav from "./PCNav";

const TopRated = ({
  topRatedMovies,
  isTopRatedLoading,
  topRatedError,
  genres,
  isGenreLoading,
  genreError,
  currentPage,
  topRatedTotalPages,
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
      <h2 className="text-2xl xl:py-3 xl:pb-5 xl:text-3xl">Top Rated Movies</h2>
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
              <Feed movies={topRatedMovies} genres={genres} />
              <Pages
                currentPage={currentPage}
                totalPages={topRatedTotalPages}
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

export default TopRated;
