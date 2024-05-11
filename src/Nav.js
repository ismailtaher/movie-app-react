import React from "react";
import { Link } from "react-router-dom";

const Nav = ({
  search,
  setSearch,
  genreSearch,
  setGenreSearch,
  handleCheck,
  toggleMenu,
}) => {
  return (
    <nav
      id="nav-menu"
      className="absolute p-3 -left-2 top-8 flex-col gap-1 w-auto bg-slate-700 rounded-br-3xl animate-open-menu hidden">
      {/* <form onSubmit={(e) => e.preventDefault()}>
        <label className="absolute left-[-99999px]" htmlFor="search">
          Search Movies
        </label>
        <input
          className="text-xl bg-slate-800"
          type="text"
          id="search"
          placeholder=" Search Movies"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form> */}
      <h2 className="text-2xl font-bold text-emerald-400">Genres</h2>
      <ul className="px-2 flex flex-col">
        {genreSearch.map((genreSingle) => (
          <div className=" flex flex-col space-y-1 justify-center items-start">
            <label className="bg-slate-700 has-[:checked]:bg-emerald-500  has-[:checked]:border-emerald-500 w-auto text-center px-8 py-1 border-2 rounded-full">
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
      <Link to="/about" className="p-2">
        About
      </Link>
    </nav>
  );
};

export default Nav;
