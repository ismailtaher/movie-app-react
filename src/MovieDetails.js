import React from "react";
import ISO6391 from "iso-639-1";

const MovieDetails = ({ details }) => {
  const imgUrl = "https://image.tmdb.org/t/p/w500";

  const formatYear = (year) => {
    const formated = String(year).slice(0, 4);
    return formated;
  };

  const movieHours = (time) => {
    const h = Math.floor(time / 60);
    const m = time % 60;
    return h + "h " + m + "m";
  };

  return (
    <div className="relative flex flex-col justify-center">
      <div>
        <img
          src={imgUrl + details.backdrop_path}
          alt={details.title + "Backdrop Image"}
        />
      </div>
      <div className="absolute w-24 top-[18px] mx-3">
        <img
          src={imgUrl + details.poster_path}
          alt={details.title + "Poster Image"}
        />
      </div>
      <div className="bg-slate-700 w-auto flex flex-col justify-center items-center py-2">
        <div>
          <h1 className="text-2xl px-3">
            {details.title}&nbsp;&#40;
            {formatYear(details.release_date)}&#41;
          </h1>
        </div>
        <div className="p-2 flex flex-row justify-center items-center space-x-3">
          <div className="flex justify-center items-center">
            <h3>⭐&nbsp;</h3>
            <h3 className="text-xl">
              {Number(details.vote_average?.toFixed(1))}/10
            </h3>
          </div>
          <div className="flex flex-row justify-center items-center">
            <h3 className="text-xl">Votes:&nbsp;</h3>
            <h3 className="text-xl">{details.vote_count}</h3>
          </div>
        </div>
        <div className="flex flex-col space-y-2 bg-slate-800 w-[100%] p-3">
          <div className="flex space-x-4 justify-center items-center">
            <h3>{ISO6391.getName(details.original_language)}</h3>
            <h3>{details.release_date}</h3>
            <h3>{movieHours(details.runtime)}</h3>
          </div>
          <div className="flex space-x-4 justify-center items-center">
            {details.genres?.map((genre) => {
              return <h3>{genre.name}</h3>;
            })}
          </div>
        </div>
        <div className="p-2 flex w-[100%] flex-col space-y-2">
          <p className="italic text-lg pt-1">{details.tagline}</p>
          <div>
            <h2 className="text-2xl font-bold pb-2">Overview</h2>
            <p className="tetx-lg">{details.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
