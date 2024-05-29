import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = ({ genreSearch, handleCheck, toggleMenu, setCurrentPage }) => {
  const [isGenreDropddownOpen, setIsGenreDropdownOpen] = useState(false);

  const toggleGenreDropdown = () => {
    setIsGenreDropdownOpen((prev) => !prev);
  };

  const toggleMenuResetPage = () => {
    toggleMenu();
    setCurrentPage(1);
  };

  return (
    <nav
      id="nav-menu"
      className="z-20 absolute text-black p-3 top-[71px] -left-2 md:top-[47px] md:-left-3 flex-col gap-1 w-auto md:w-[50%] bg-white rounded-br-3xl animate-open-menu hidden">
      <h2
        className={`text-2xl w-56 ${
          isGenreDropddownOpen ? "text-emerald-500" : "text-black"
        }`}
        onClick={toggleGenreDropdown}>
        Genres
      </h2>
      {isGenreDropddownOpen && (
        <ul className="px-2 flex flex-col justify-start items-start md:flex-row md:flex-wrap gap-2 md:justify-start md:items-center">
          {genreSearch.map((genreSingle) => (
            <div className="flex flex-row space-y-1 justify-center items-center">
              <label className="has-[:checked]:bg-emerald-500  has-[:checked]:border-emerald-500 w-auto text-center px-8 py-1 border-emerald-500 border-2 rounded-full">
                <input
                  className="hidden"
                  id="genreCheck"
                  type="checkbox"
                  checked={genreSingle.cond}
                  onChange={() => handleCheck(genreSingle.id)}
                />
                {genreSingle.name}
              </label>
            </div>
          ))}
        </ul>
      )}
      <Link
        to="/popular"
        onClick={toggleMenuResetPage}
        className="text-2xl hover:text-emerald-400 active:text-emerald-400">
        Popular
      </Link>
      <Link
        to="/top-rated"
        onClick={toggleMenuResetPage}
        className="text-2xl hover:text-emerald-400 active:text-emerald-400">
        Top Rated
      </Link>
      <Link
        to="/upcoming"
        onClick={toggleMenuResetPage}
        className="text-2xl hover:text-emerald-400 active:text-emerald-400">
        Upcoming
      </Link>
      <Link
        to="/about"
        onClick={toggleMenuResetPage}
        className="text-2xl hover:text-emerald-400 active:text-emerald-400">
        About
      </Link>
    </nav>
  );
};

export default Nav;
