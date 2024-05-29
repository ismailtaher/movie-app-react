import React, { useEffect, useRef, useState } from "react";
import logo from "./images/duck-logo-white.png";
import blackLogo from "./images/duck-logo.png";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { FaRegUserCircle, FaTimes } from "react-icons/fa";
import Results from "./Results";

const Header = ({
  search,
  setSearch,
  width,
  genreSearch,
  setGenreSearch,
  handleCheck,
  toggleMenu,
  searchResults,
  searchError,
  isSearchLoading,
  setCurrentPage,
  genres,
}) => {
  const [showResults, setShowResults] = useState(false);
  const [showClearButton, setShowClearButton] = useState(false);
  const searchRef = useRef(null);
  const resultsRef = useRef(null);
  /* const container = useRef(null);
  const [height, setHeight] = useState(null);
  useLayoutEffect(() => setHeight(container.current.offsetHeight), []);
  console.log(height); */

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current &&
        resultsRef.current &&
        !searchRef.current.contains(event.target) &&
        !resultsRef.current.contains(event.target)
      ) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchChange = (e) => {
    const searchText = e.target.value;
    setSearch(e.target.value);
    setShowResults(e.target.value !== "");

    setShowClearButton(searchText !== "");
  };

  const handleClearSearch = () => {
    setSearch("");
    setShowResults(false);
    setShowClearButton(false);
  };

  const closeMenu = () => {
    const hamButton = document.getElementById("hamburger-button");
    const mobileMenu = document.getElementById("nav-menu");
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("flex");
    hamButton.classList.remove("toggle-btn");
  };

  const homeClose = () => {
    closeMenu();
    setGenreSearch([
      {
        id: 28,
        name: "Action",
        cond: false,
      },
      {
        id: 12,
        name: "Adventure",
        cond: false,
      },
      {
        id: 16,
        name: "Animation",
        cond: false,
      },
      {
        id: 35,
        name: "Comedy",
        cond: false,
      },
      {
        id: 80,
        name: "Crime",
        cond: false,
      },
      {
        id: 99,
        name: "Documentary",
        cond: false,
      },
      {
        id: 18,
        name: "Drama",
        cond: false,
      },
      {
        id: 10751,
        name: "Family",
        cond: false,
      },
      {
        id: 14,
        name: "Fantasy",
        cond: false,
      },
      {
        id: 36,
        name: "History",
        cond: false,
      },
      {
        id: 27,
        name: "Horror",
        cond: false,
      },
      {
        id: 10402,
        name: "Music",
        cond: false,
      },
      {
        id: 9648,
        name: "Mystery",
        cond: false,
      },
      {
        id: 10749,
        name: "Romance",
        cond: false,
      },
      {
        id: 878,
        name: "Science Fiction",
        cond: false,
      },
      {
        id: 10770,
        name: "TV Movie",
        cond: false,
      },
      {
        id: 53,
        name: "Thriller",
        cond: false,
      },
      {
        id: 10752,
        name: "War",
        cond: false,
      },
      {
        id: 37,
        name: "Western",
        cond: false,
      },
    ]);
    handleClearSearch();
  };

  return (
    <header className="p-2 bg-[#1A936F] -top-1 z-10 flex justify-center gap-1 items-between text-xl font-display flex-col w-[100%] md:p-3">
      <div className="relative flex justify-between gap-1 items-center flex-row w-auto flex-grow md:space-x-3">
        {width <= 1024 && (
          <>
            <Nav
              toggleMenu={toggleMenu}
              search={search}
              setSearch={setSearch}
              genreSearch={genreSearch}
              setGenreSearch={setGenreSearch}
              handleCheck={handleCheck}
              setCurrentPage={setCurrentPage}></Nav>
            <button
              id="hamburger-button"
              onClick={toggleMenu}
              className="relative w-8 h-8">
              <div
                className="toggle-btn w-6 h-0.5 sm:w-8 bg-black sm:h-0.5 md:w-10 md:h-1 xl:w-12 xl:h-0.5 absolute transition-all duration-100 before:content-[''] before:bg-black before:w-6 before:h-0.5 sm:before:h-0.5 sm:before:w-8 md:before:w-10 md:before:h-1 xl:before:w-12 xl:before:h-0.5 before:absolute before:-translate-x-3 
                    sm:before:-translate-x-4 md:before:-translate-x-5 xl:before:-translate-x-6 
                    before:-translate-y-2 md:before:-translate-y-3 xl:before:-translate-y-3 
                    before:transition-all before:duration-500 after:content-[''] after:bg-black after:w-6 after:h-0.5 sm:after:h-0.5 sm:after:w-8 md:after:w-10 md:after:h-1 xl:after:w-12 xl:after:h-0.5 after:absolute after:transition-all after:duration-500 after:-translate-x-3 sm:after:-translate-x-4 md:after:-translate-x-5 xl:after:-translate-x-6 after:translate-y-2 md:after:translate-y-3
                    xl:after:translate-y-3"></div>
            </button>
          </>
        )}
        <Link
          to="/"
          onClick={homeClose}
          className="md:bg-[#1A936F] px-2 rounded-lg">
          <div className="flex justify-center items-center">
            <img
              src={blackLogo}
              alt="Duck Logo"
              className="flex w-5 h-auto justify-center items-center md:w-7 xl:w-14 md:text-black"
            />
            <h1 className="md:text-3xl text-black">MDB</h1>
          </div>
        </Link>
        {640 < width && width < 1025 && (
          <>
            <div className="flex flex-grow justify-center items-center">
              <form className="w-[100%]" onSubmit={(e) => e.preventDefault()}>
                <label className="absolute left-[-99999px]" htmlFor="search">
                  Search Movies
                </label>
                <div className="relative w-full">
                  <input
                    className="text-xl md:text-3xl bg-white w-[100%] px-2 rounded"
                    type="text"
                    id="search"
                    autoComplete="off"
                    placeholder=" Search Movies"
                    /* ref={container} */
                    value={search}
                    onChange={handleSearchChange}
                    onClick={closeMenu}
                  />
                  {showClearButton && (
                    <button
                      className={`absolute right-1 -top-[6px] md:-top-[2px] md:right-2 transform translate-y-1/2`}
                      onClick={handleClearSearch}>
                      <FaTimes className="text-gray-400 hover:text-gray-600 cursor-pointer"></FaTimes>
                    </button>
                  )}
                </div>
              </form>
              {showResults && (
                <Results
                  searchResults={searchResults}
                  searchError={searchError}
                  isSearchLoading={isSearchLoading}
                  resultsRef={resultsRef}
                  setShowResults={setShowResults}
                  genres={genres}></Results>
              )}
            </div>
          </>
        )}
        {width > 1024 && (
          <Nav
            search={search}
            setSearch={setSearch}
            genreSearch={genreSearch}
            setGenreSearch={setGenreSearch}
            handleCheck={handleCheck}></Nav>
        )}
        <div>
          <FaRegUserCircle className="text-black text-2xl md:text-3xl" />
        </div>
      </div>
      {width < 640 && (
        <div className="flex justify-center items-center">
          <form className="w-[100%]" onSubmit={(e) => e.preventDefault()}>
            <label className="absolute left-[-99999px]" htmlFor="search">
              Search Movies
            </label>
            <div className="relative w-full">
              <input
                className="text-xl bg-white text-black w-[100%] px-2 rounded"
                type="text"
                id="search"
                autoComplete="off"
                placeholder=" Search Movies"
                /* ref={container} */
                value={search}
                onChange={handleSearchChange}
                onClick={closeMenu}
              />
              {showClearButton && (
                <button
                  className={`absolute right-1 -top-[6px] transform translate-y-1/2`}
                  onClick={handleClearSearch}>
                  <FaTimes className="text-gray-400 hover:text-gray-600 cursor-pointer"></FaTimes>
                </button>
              )}
            </div>
          </form>
          {showResults && (
            <Results
              searchResults={searchResults}
              searchError={searchError}
              isSearchLoading={isSearchLoading}
              resultsRef={resultsRef}
              setShowResults={setShowResults}
              genres={genres}></Results>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
