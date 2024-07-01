import React from "react";
import HomeFeed from "./HomeFeed";
import HomeBg from "./images/wallBGwebcompressed.webp";
import placeholderImage from "./images/wallBGwebcompressedx10.webp";
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
      <LazyBackgroundSection
        HomeBg={HomeBg}
        placeholderImage={placeholderImage}>
        <article className=" p-5 h-96 w-full flex flex-col justify-center items-start backdrop-blur-sm space-y-2 text-white">
          <h1 className="text-5xl">Welcome.</h1>
          <div>
            <h2 className="text-3xl">
              Millions of movies and people to discover.
            </h2>
            <h2 className="text-3xl">Explore now.</h2>
          </div>
        </article>
      </LazyBackgroundSection>
      {/* <h2 className="p-3 pb-0 text-2xl md:text-3xl text-black">Home</h2> */}
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
