import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = ({ genreSearch, handleCheck, toggleMenu }) => {
  const [isGenreDropddownOpen, setIsGenreDropdownOpen] = useState(false);

  const toggleGenreDropdown = () => {
    setIsGenreDropdownOpen((prev) => !prev);
  };

  return (
    <nav
      id="nav-menu"
      className="z-20 absolute p-3 top-[71px] -left-2 flex-col gap-1 w-auto backdrop-blur-2xl rounded-br-3xl animate-open-menu hidden">
      <h2
        className={`text-2xl w-56 ${
          isGenreDropddownOpen ? "text-emerald-400" : "text-white"
        }`}
        onClick={toggleGenreDropdown}>
        Genres
      </h2>
      {isGenreDropddownOpen && (
        <ul className="px-2 flex flex-col">
          {genreSearch.map((genreSingle) => (
            <div className=" flex flex-col space-y-1 justify-center items-start">
              <label className="backdrop-blur-2xl has-[:checked]:bg-emerald-500  has-[:checked]:border-emerald-500 w-auto text-center px-8 py-1 border-2 rounded-full">
                <input
                  className="hidden"
                  id="genreCheck"
                  type="checkbox"
                  checked={genreSingle.cond}
                  onChange={() => handleCheck(genreSingle.id)}
                />
                {genreSingle.name}
              </label>
              <hr />
            </div>
          ))}
        </ul>
      )}
      <Link
        to="/popular"
        onClick={toggleMenu}
        className="text-2xl hover:text-emerald-400 active:text-emerald-400">
        Popular
      </Link>
      <Link
        to="/top-rated"
        onClick={toggleMenu}
        className="text-2xl hover:text-emerald-400 active:text-emerald-400">
        Top Rated
      </Link>
      <Link
        to="/upcoming"
        onClick={toggleMenu}
        className="text-2xl hover:text-emerald-400 active:text-emerald-400">
        Upcoming
      </Link>
      <Link
        to="/about"
        onClick={toggleMenu}
        className="text-2xl hover:text-emerald-400 active:text-emerald-400">
        About
      </Link>
    </nav>
  );
};

export default Nav;
