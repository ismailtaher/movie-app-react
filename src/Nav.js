import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = ({
  genreSearch,
  handleCheck,
  toggleMenu,
  setCurrentPage,
  width,
}) => {
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
      className="z-20 absolute text-black p-3 top-[71px] -left-2 md:top-[47px] md:-left-3 lg:-top-2 lg:left-0 flex-col gap-1 w-auto md:w-[50%] bg-white lg:w-full lg:h-[100vh] rounded-br-3xl animate-open-menu hidden lg:justify-center lg:items-center lg:rounded-none lg:bg-[#F9F6EE]">
      <Link
        to="/"
        onClick={toggleMenuResetPage}
        className="text-2xl hover:text-emerald-400 active:text-emerald-400 hover:lg:text-3xl ease-in-out">
        Home
      </Link>
      <h2
        className={`text-2xl w-56 lg:text-center lg:hidden hover:text-emerald-500 cursor-pointer ${
          isGenreDropddownOpen ? "text-emerald-500" : "text-black"
        }`}
        onClick={toggleGenreDropdown}>
        Genres
      </h2>
      {isGenreDropddownOpen && (
        <ul className="px-2 flex flex-col justify-start items-start md:flex-row md:flex-wrap gap-2 md:justify-start md:items-center">
          {genreSearch.map((genreSingle) => (
            <div className="flex flex-row space-y-1 justify-center items-center">
              <label className="cursor-pointer hover:bg-emerald-100 has-[:checked]:bg-[#1A936F]  has-[:checked]:border-[#1A936F] w-auto text-center px-8 py-1 border-[#1A936F] border-2 rounded-full">
                <input
                  className="hidden"
                  id={genreSingle.id}
                  key={genreSingle.id}
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
        to="/discover"
        onClick={toggleMenuResetPage}
        className="text-2xl hover:text-emerald-400 active:text-emerald-400 hover:lg:text-3xl ease-in-out">
        Discover
      </Link>
      <Link
        to="/popular"
        onClick={toggleMenuResetPage}
        className="text-2xl hover:text-emerald-400 active:text-emerald-400 hover:lg:text-3xl ease-in-out">
        Popular
      </Link>
      <Link
        to="/top-rated"
        onClick={toggleMenuResetPage}
        className="text-2xl hover:text-emerald-400 active:text-emerald-400 hover:lg:text-3xl ease-in-out">
        Top Rated
      </Link>
      <Link
        to="/upcoming"
        onClick={toggleMenuResetPage}
        className="text-2xl hover:text-emerald-400 active:text-emerald-400 hover:lg:text-3xl ease-in-out">
        Upcoming
      </Link>
      <Link
        to="/about"
        onClick={toggleMenuResetPage}
        className="text-2xl hover:text-emerald-400 active:text-emerald-400 hover:lg:text-3xl ease-in-out">
        About
      </Link>
    </nav>
  );
};

export default Nav;
