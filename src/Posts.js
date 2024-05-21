import { Link } from "react-router-dom";
import { useRef } from "react";

const Posts = ({ movie, genres }) => {
  const imgUrl = "https://image.tmdb.org/t/p/w500";

  const movieGenresIds = new Set(movie.genre_ids);

  const commonGenres = genres
    .filter((genre) => movieGenresIds.has(genre.id))
    .map((genre) => genre.name)
    .join(" | ");

  return (
    <article>
      <Link to={`/movie/${movie.id}`}>
        <div className="bg-slate-700 p-2 my-3 rounded">
          <div className="rounded">
            <img
              src={imgUrl + movie.poster_path}
              alt={`${movie.title} Poster`}
              className="hover:contrast-[60%] hover:blur-[1.5px] ease-in-out duration-500 rounded"
            />
          </div>
          <div className="bottom-4 left-2 p-1">
            <div className="flex justify-between py-2 relative">
              <h2 className="text-2xl flex-wrap">
                {movie.title}&nbsp;&#40;{movie.release_date.slice(0, 4)}&#41;
              </h2>
              <h3 className="absolute -top-20 right-4 bg-slate-100 text-black border-4 border-teal-400 w-14 text-center h-14 flex justify-center items-center text-2xl font-bold rounded-full">
                {Number(movie.vote_average.toFixed(1))}
              </h3>
            </div>
            {movie.adult && <h3>18+</h3>}
            <h3 className="text-xl text-slate-300">{commonGenres}</h3>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default Posts;
