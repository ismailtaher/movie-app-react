import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import useAxiosFetch from "./hooks/useAxiosFetch";
import MovieDetails from "./MovieDetails";

const Details = ({ api_key }) => {
  const { id } = useParams();

  const [details, setDetails] = useState({});
  const [credits, setCredits] = useState({});

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

  const {
    data: creditsData,
    fetchError: creditsError,
    isLoading: isCreditsLoading,
  } = useAxiosFetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en&api_key=${api_key}`,
    false,
    false,
    "isCredits"
  );

  useEffect(() => {
    setCredits(creditsData);
  }, [creditsData]);

  console.log(id);
  console.log(detailsData);
  console.log(credits);
  return (
    <main className="main-style">
      {isDetailsLoading && isCreditsLoading && (
        <p className="text-center">Loading Details...</p>
      )}
      {(!isDetailsLoading && !isCreditsLoading && detailsError) ||
        (creditsError && (
          <p className="text-rose-900 text-center">{detailsError}</p>
        ))}
      {!isDetailsLoading &&
        !isCreditsLoading &&
        !detailsError &&
        !creditsError && (
          <MovieDetails details={details} credits={credits}></MovieDetails>
        )}
    </main>
  );
};

export default Details;
