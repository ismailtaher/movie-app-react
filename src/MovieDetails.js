import React from "react";
import ISO6391 from "iso-639-1";
import Iframe from "react-iframe";

const MovieDetails = ({ details, credits, width, trailer, reviews }) => {
  const imgUrl = "https://image.tmdb.org/t/p/w500";

  const backdrop = imgUrl + details.backdrop_path;

  /* console.log(backdrop); */

  const trailer_url = "https://youtube.com/embed/";

  const formatYear = (year) => {
    const formated = String(year).slice(0, 4);
    return formated;
  };

  const movieHours = (time) => {
    const h = Math.floor(time / 60);
    const m = time % 60;
    return h + "h " + m + "m";
  };

  const findJob = (credits, job) => {
    if (!credits || !job || !credits.crew) {
      return null;
    }

    const crewMember = credits.crew.find((member) => member.job === job);
    return crewMember ? crewMember.name : null;
  };

  const director = findJob(credits, "Director");
  const writer = findJob(credits, "Writer");

  const findTrailer = (videos) => {
    if (!videos || !videos.length) {
      return null;
    }
    const trailer = videos.find((video) => video.type === "Trailer");
    return trailer ? trailer.key : null;
  };

  const trailerKey = findTrailer(trailer);

  /* console.log(director);
  console.log(writer); */

  /*   const director =
    credits && credits.crew
      ? credits.crew.find((member) => member.job === "Director")
      : null; */

  /* console.log(width); */

  return (
    <div className={`relative flex flex-col justify-center w-full text-white`}>
      <div
        className=""
        style={{
          backgroundImage: `url('${backdrop}')`,
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}>
        {width < 768 && (
          <div className={`w-24 m-4 md:w-[32rem]`}>
            <img
              src={imgUrl + details.poster_path}
              alt={details.title + "Poster Image"}
            />
          </div>
        )}
        {768 <= width && (
          <section className="md:bg-transparent md:backdrop-blur-base md:backdrop-brightness-50 w-auto grid grid-flow-col grid-cols-3 gap-8 py-2 overscroll-contain">
            <div className={`w-24 m-4 md:w-full`}>
              <img
                className="w-full"
                src={imgUrl + details.poster_path}
                alt={details.title + "Poster Image"}
              />
            </div>
            <div className="p-2 text-wrap col-span-2">
              <div>
                <h1 className="text-3xl pt-1">
                  {details.title}&nbsp;&#40;
                  {formatYear(details.release_date)}&#41;
                </h1>
              </div>
              <article className="py-2 flex flex-row justify-start items-center space-x-3">
                <div className="flex justify-center items-center">
                  <h3>⭐&nbsp;</h3>
                  <h3 className="text-2xl">
                    {Number(details.vote_average?.toFixed(1))}/10
                  </h3>
                </div>
                <div className="flex flex-row justify-center items-center">
                  <h3 className="text-2xl">Votes:&nbsp;</h3>
                  <h3 className="text-2xl">{details.vote_count}</h3>
                </div>
              </article>
              <article className="flex flex-col space-y-2 bg-slate-800 md:bg-transparent w-[100%] p-3 text-xl">
                <div className="flex space-x-4 justify-center items-center">
                  <h3>{ISO6391.getName(details.original_language)}</h3>
                  <h3>{details.release_date}</h3>
                  <h3>{movieHours(details.runtime)}</h3>
                </div>
                <div className="flex space-x-4 flex-wrap justify-center items-center">
                  {details.genres?.map((genre) => {
                    return <h3>{genre.name}</h3>;
                  })}
                </div>
              </article>
              <article className="p-2 flex w-[100%] flex-col space-y-2">
                <p className="italic text-lg pt-1">{details.tagline}</p>
                <div>
                  <h2 className="text-2xl font-bold pb-2">Overview</h2>
                  <p className="text-lg">{details.overview}</p>
                </div>
              </article>
              <article className="px-2 py-3 flex flex-row justify-start space-x-10 w-[100%]">
                <div className="flex flex-col justify-center items-start">
                  <h3 className="text-lg font-semibold">
                    {director ? director : "Director not found"}
                  </h3>
                  <h3 className="text-lg text-zinc-400">Director</h3>
                </div>
                {writer && (
                  <div className="flex flex-col justify-center items-start">
                    <h3 className="text-lg font-semibold">
                      {writer ? writer : "Writer not found"}
                    </h3>
                    <h3 className="text-lg text-zinc-400">Writer</h3>
                  </div>
                )}
              </article>
            </div>
          </section>
        )}
      </div>
      {width < 768 && (
        <section className="bg-[#C6DABF] w-auto flex flex-col justify-center items-center py-2 text-black">
          <div>
            <h1 className="text-2xl px-3">
              {details.title}&nbsp;&#40;
              {formatYear(details.release_date)}&#41;
            </h1>
          </div>
          <article className="py-2 flex flex-row justify-center items-center space-x-3">
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
          </article>
          <article className="flex flex-col space-y-2 bg-[#1A936F] w-[95%] p-3 rounded-xl">
            <div className="flex space-x-4 justify-center items-center">
              <h3>{ISO6391.getName(details.original_language)}</h3>
              <h3>{details.release_date}</h3>
              <h3>{movieHours(details.runtime)}</h3>
            </div>
            <div className="flex space-x-4 flex-wrap justify-center items-center">
              {details.genres?.map((genre) => {
                return <h3>{genre.name}</h3>;
              })}
            </div>
          </article>
          <article className="p-2 flex w-[100%] flex-col space-y-2">
            <p className="italic text-lg pt-1">{details.tagline}</p>
            <div>
              <h2 className="text-2xl font-bold pb-2">Overview</h2>
              <p className="tetx-lg">{details.overview}</p>
            </div>
          </article>
          <article className="px-2 py-3 flex flex-row justify-evenly space-x-10 w-[100%]">
            <div className="flex flex-col justify-center items-start">
              <h3 className="text-lg font-semibold">
                {director ? director : "Director not found"}
              </h3>
              <h3 className="text-zinc-700">Director</h3>
            </div>
            {writer && (
              <div className="flex flex-col justify-center items-start">
                <h3 className="text-lg font-semibold">
                  {writer ? writer : "Writer not found"}
                </h3>
                <h3 className="text-zinc-700">Writer</h3>
              </div>
            )}
          </article>
        </section>
      )}
      <section className="p-4 md:p-6 flex flex-col space-y-4">
        <article>
          <h1 className="text-black text-xl md:text-3xl pb-2 md:pb-4">
            Top Cast
          </h1>
          <div className="flex space-x-3 overflow-x-scroll scroll-cast">
            {credits.cast?.slice(0, 9).map((member) => {
              return (
                <div className="relative bg-[#C6DABF] rounded-md">
                  <div className="w-24 md:w-32 rounded-md">
                    {member.profile_path && (
                      <img
                        className="object-scale-down rounded-md"
                        src={imgUrl + member.profile_path}
                        alt={`${member.name}'s profile`}
                      />
                    )}
                  </div>
                  <div className="bg-[#C6DABF] p-1 md:p-2 flex flex-col justify-start items-start">
                    <h2 className="font-semibold text-black text-sm md:text-lg">
                      {member.name}
                    </h2>
                    <h2 className="text-zinc-700 text-sm md:text-base">
                      {member.character}
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
        </article>
        <article>
          <h1 className="text-xl text-black md:text-3xl pb-2 md:pb-4">
            Trailer
          </h1>
          {trailerKey ? (
            <div className="flex justify-center items-center h-[100%]">
              <Iframe
                width="100%"
                height="100%"
                className="h-full w-full md:h-[24rem]"
                url={trailer_url + trailerKey}
                frameborder="0"
                allowfullscreen="allowfullscreen"></Iframe>
            </div>
          ) : (
            <h2 className="text-center">No Trailer to Show</h2>
          )}
        </article>
        <article>
          <h1 className="text-xl text-black md:text-3xl pb-2 md:pb-4">
            Reviews
          </h1>
          {reviews.length ? (
            <div className="bg-[#C6DABF] flex flex-col md:justify-start md:items-start p-2 md:p-4 rounded-lg text-black">
              <div
                className={
                  reviews[0]?.author_details.avatar_path
                    ? `flex justify-start items-center pt-2 md:p-4`
                    : `flex justify-center items-center pt-2 md:p-4`
                }>
                {reviews[0].author_details.avatar_path && (
                  <div className="rounded-full">
                    <img
                      className="cropped-image rounded-full"
                      width={width / 4}
                      src={imgUrl + reviews[0]?.author_details.avatar_path}
                      alt={`${reviews[0]?.author}'s Profile`}
                    />
                  </div>
                )}
                <div>
                  <h2 className="font-semibold md:text-2xl">
                    A review by {reviews[0]?.author}
                  </h2>
                  <div className="flex space-x-2 md:text-2xl">
                    <h3 className="bg-emerald-500 text-black rounded-md font-semibold">
                      &nbsp;{reviews[0]?.author_details.rating}.0&nbsp;
                    </h3>
                    <p className="text-zinc-700 text-sm md:text-xl">
                      Posted on {String(reviews[0]?.created_at).slice(0, 10)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-3 md:text-2xl">
                <p className="line-clamp-[15]">{reviews[0]?.content}</p>
              </div>
            </div>
          ) : (
            <h2 className="text-center">No Reviews to Show</h2>
          )}
        </article>
      </section>
    </div>
  );
};

export default MovieDetails;
