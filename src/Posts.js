import { Link } from "react-router-dom";
import movieReel from "./images/MovieReel.jpeg";

const Posts = ({ movie, genres }) => {
  const imgUrl = "https://image.tmdb.org/t/p/w500";

  const movieGenresIds = new Set(movie.genre_ids);

  const commonGenres = genres
    .filter((genre) => movieGenresIds.has(genre.id))
    .map((genre) => genre.name)
    .join(" | ");

  return (
    <article className="flex flex-wrap md:w-[100%] border-box">
      <Link to={`/movie/${movie.id}`} className="flex flex-wrap">
        <div className=" border drop-shadow border-[#C6DABF] hover:bg-[#C6DABF] p-2 my-3 rounded">
          <div className="rounded md:w-auto relative">
            <img
              width={200}
              height={300}
              loading="lazy"
              src={movie.poster_path ? imgUrl + movie.poster_path : movieReel}
              alt={`${movie.title} Poster`}
              className="ease-in-out duration-500 rounded w-full"
            />
            <h3 className="absolute bottom-4 right-8 md:right-2 bg-slate-100 text-black border-4 border-teal-400 w-14 text-center h-14 flex justify-center items-center text-2xl font-bold rounded-full">
              {Number(movie.vote_average.toFixed(1))}
            </h3>
          </div>
          <div className="p-1 text-wrap">
            <div className="flex justify-between py-2 relative flex-wrap">
              <h2 className="text-black text-2xl flex-wrap text-wrap">
                {movie.title}&nbsp;&#40;{movie.release_date.slice(0, 4)}&#41;
              </h2>
            </div>
            {movie.adult && <h3>18+</h3>}
            <h3 className="text-xl text-slate-700 text-wrap">{commonGenres}</h3>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default Posts;
