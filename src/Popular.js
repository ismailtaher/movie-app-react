import React from "react";
import Feed from "./Feed";
import Pages from "./Pages";
import PCNav from "./PCNav";

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
  handleCheck,
  genreSearch,
  ratingValue,
  handleSliderChange,
  handleChanges,
}) => {
  return (
    <main className="main-style p-3 2xl:px-44">
      <h2 className="text-2xl xl:py-3 xl:pb-5 md:text-3xl">Popular Movies</h2>
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
              <Feed movies={popularMovies} genres={genres} />
              <Pages
                currentPage={currentPage}
                totalPages={popularTotalPages}
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

export default Popular;
