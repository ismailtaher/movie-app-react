import React from "react";
import Posts from "./Posts";

const Feed = ({ movies, genres }) => {
  return (
    <div className="sm:grid sm:grid-cols-2 sm:gap-x-3 md:grid md:grid-cols-3 md:gap-3 md:gap-y-0 lg:grid-cols-4">
      {movies?.map((movie) => (
        <Posts key={movie.id} movie={movie} genres={genres} />
      ))}
    </div>
  );
};

export default Feed;
