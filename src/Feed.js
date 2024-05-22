import React from "react";
import Posts from "./Posts";

const Feed = ({ movies, genres }) => {
  return (
    <>
      {movies?.map((movie) => (
        <Posts key={movie.id} movie={movie} genres={genres} />
      ))}
    </>
  );
};

export default Feed;
