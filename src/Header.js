import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import logo from "./images/duck-logo-white.png";
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

  return (
    <header className="p-2 bg-slate-700 -top-1 z-10 flex justify-center gap-1 items-between text-xl font-display flex-col w-[100%]">
      <div className="relative flex justify-between gap-1 items-center flex-row w-auto flex-grow">
        {width < 768 && (
          <>
            <Nav
              toggleMenu={toggleMenu}
              search={search}
              setSearch={setSearch}
              genreSearch={genreSearch}
              setGenreSearch={setGenreSearch}
              handleCheck={handleCheck}></Nav>
            <button
              id="hamburger-button"
              onClick={toggleMenu}
              className="relative w-8 h-8">
              <div
                className="toggle-btn w-6 h-0.5 sm:w-8 bg-white sm:h-0.5 xl:w-12 xl:h-0.5 absolute transition-all duration-100 before:content-[''] before:bg-white before:w-6 before:h-0.5 sm:before:h-0.5 sm:before:w-8 xl:before:w-12 xl:before:h-0.5 before:absolute before:-translate-x-3 
                    sm:before:-translate-x-4 xl:before:-translate-x-6 
                    before:-translate-y-2 xl:before:-translate-y-3 
                    before:transition-all before:duration-500 after:content-[''] after:bg-white after:w-6 after:h-0.5 sm:after:h-0.5 sm:after:w-8 xl:after:w-12 xl:after:h-0.5 after:absolute after:transition-all after:duration-500 after:-translate-x-3 sm:after:-translate-x-4 xl:after:-translate-x-6 after:translate-y-2
                    xl:after:translate-y-3"></div>
            </button>
          </>
        )}
        <Link to="/">
          <div className="flex justify-center items-center">
            <img
              src={logo}
              alt="Duck Logo"
              className="flex w-5 h-auto justify-center items-center xl:w-14"
            />
            <h1 className="text-white">MDB</h1>
          </div>
        </Link>
        {width > 768 && (
          <Nav
            search={search}
            setSearch={setSearch}
            genreSearch={genreSearch}
            setGenreSearch={setGenreSearch}
            handleCheck={handleCheck}></Nav>
        )}
        <div>
          <FaRegUserCircle className="text-2xl" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <form className="w-[100%]" onSubmit={(e) => e.preventDefault()}>
          <label className="absolute left-[-99999px]" htmlFor="search">
            Search Movies
          </label>
          <div className="relative w-full">
            <input
              className="text-xl bg-slate-800 w-[100%] px-2 rounded"
              type="text"
              id="search"
              autoComplete="off"
              placeholder=" Search Movies"
              /* ref={container} */
              value={search}
              onChange={handleSearchChange}
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
            setShowResults={setShowResults}></Results>
        )}
      </div>
    </header>
  );
};

export default Header;
