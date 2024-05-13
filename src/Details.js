import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import useAxiosFetch from "./hooks/useAxiosFetch";
import MovieDetails from "./MovieDetails";

const Details = ({ api_key }) => {
  const { id } = useParams();

  const [details, setDetails] = useState({});

  const {
    data: detailsData,
    fetchError: detailsError,
    isLoading: isDetailsLoading,
  } = useAxiosFetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en&api_key=${api_key}`,
    false,
    "isDetails"
  );

  useEffect(() => {
    setDetails(detailsData);
  }, [detailsData]);

  console.log(id);
  console.log(detailsData);
  return (
    <main className="main-style">
      {isDetailsLoading && <p className="text-center">Loading Details...</p>}
      {!isDetailsLoading && detailsError && (
        <p className="text-rose-900 text-center">{detailsError}</p>
      )}
      {!isDetailsLoading && !detailsError && (
        <MovieDetails details={details}></MovieDetails>
      )}
    </main>
  );
};

export default Details;
