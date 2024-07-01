import React from "react";
import HomeFeed from "./HomeFeed";
import LazyBackgroundSection from "./LazyBackgroundSection";
import { Link } from "react-router-dom";

const Home = ({
  popularMovies,
  popularError,
  isPopularLoading,
  topRatedMovies,
  topRatedError,
  isTopRatedLoading,
  upcomingMovies,
  upcomingError,
  isUpcomingLoading,
  genres,
  genreError,
  isGenreLoading,
  width,
  isMenuOpen,
}) => {
  /* console.log(movies); */
  return (
    <main className="main-style">
      <LazyBackgroundSection></LazyBackgroundSection>
      {isPopularLoading &&
        isTopRatedLoading &&
        isUpcomingLoading &&
        isGenreLoading && <p className="text-center">Loading Movies...</p>}
      {!isPopularLoading &&
        !isTopRatedLoading &&
        !isUpcomingLoading &&
        !isGenreLoading &&
        topRatedError &&
        upcomingError &&
        popularError && (
          <p className="text-rose-900 text-center">{popularError}</p>
        )}
      {!isPopularLoading &&
        !isTopRatedLoading &&
        !isUpcomingLoading &&
        !isGenreLoading &&
        !genreError &&
        !topRatedError &&
        !upcomingError &&
        !popularError &&
        (popularMovies?.length !== 0 && topRatedMovies?.length !== 0 ? (
          <section className="">
            <article className="my-6">
              <Link to="/popular" className="inline-block pl-3 pb-2">
                <h2 className="hover:text-[#1A936F] text-2xl text-black">
                  Popular Movies &#8250;
                </h2>
              </Link>
              <HomeFeed
                width={width}
                isMenuOpen={isMenuOpen}
                movies={popularMovies}
                genres={genres}
              />
            </article>
            <article className="my-6">
              <Link to="/top-rated" className="inline-block pl-2 pb-2">
                <h2 className="hover:text-[#1A936F] text-2xl text-black">
                  Top Rated Movies &#8250;
                </h2>
              </Link>
              <HomeFeed
                width={width}
                isMenuOpen={isMenuOpen}
                movies={topRatedMovies}
                genres={genres}
              />
            </article>
            <article className="my-6">
              <Link to="/upcoming" className="inline-block pl-2 pb-2">
                <h2 className="hover:text-[#1A936F] text-2xl text-black">
                  Upcoming Movies &#8250;
                </h2>
              </Link>
              <HomeFeed
                width={width}
                isMenuOpen={isMenuOpen}
                movies={upcomingMovies}
                genres={genres}
              />
            </article>
          </section>
        ) : (
          <p className="text-rose-900 text-center">No movies to display</p>
        ))}
    </main>
  );
};

export default Home;
