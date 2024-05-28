import React from "react";
import { Link } from "react-router-dom";

const SearchPost = ({ result, setShowResults, genres }) => {
  const handleCLick = () => {
    setShowResults(false);
  };

  const imgUrl = "https://image.tmdb.org/t/p/w500";

  const movieGenresIds = new Set(result.genre_ids);

  const commonGenres = genres
    .filter((genre) => movieGenresIds.has(genre.id))
    .map((genre) => genre.name)
    .join(" | ");

  return (
    <li onClick={handleCLick} className="cursor-pointer hover:bg-gray-200 p-1">
      <Link
        to={`/movie/${result.id}`}
        className="flex justify-start items-center space-x-4">
        <div>
          <img
            src={imgUrl + result.poster_path}
            alt="Movie poster"
            className="w-12 md:w-16"
          />
        </div>
        <div>
          <h1 className="text-lg md:text-2xl">
            {result.title}&nbsp;
            {result.release_date
              ? "(" + result.release_date.slice(0, 4) + ")"
              : ""}
          </h1>
          <h2 className="text-base md:text-xl">{commonGenres}</h2>
        </div>
      </Link>
    </li>
  );
};

export default SearchPost;
