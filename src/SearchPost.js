import React from "react";
import { Link } from "react-router-dom";

const SearchPost = ({ result, setShowResults }) => {
  const handleCLick = () => {
    setShowResults(false);
  };

  return (
    <li onClick={handleCLick} className="cursor-pointer hover:bg-gray-200 p-1">
      <Link to={`/movie/${result.id}`}>
        <h1>
          {result.title}&nbsp;&#40;{result.release_date.slice(0, 4)}&#41;
        </h1>
      </Link>
    </li>
  );
};

export default SearchPost;
