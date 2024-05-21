import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import useAxiosFetch from "./hooks/useAxiosFetch";
import MovieDetails from "./MovieDetails";

const Details = ({ api_key, width }) => {
  const { id } = useParams();

  const [details, setDetails] = useState({});
  const [credits, setCredits] = useState({});
  const [trailer, setTrailer] = useState({});
  const [reviews, setReviews] = useState({});

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

  const {
    data: trailerData,
    fetchError: trailerError,
    isLoading: isTrailerLoading,
  } = useAxiosFetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?language=en&api_key=${api_key}`,
    false,
    false,
    false,
    "isTrailer"
  );

  useEffect(() => {
    setTrailer(trailerData);
  }, [trailerData]);

  useEffect(() => {
    setCredits(creditsData);
  }, [creditsData]);

  const {
    data: reviewData,
    fetchError: reviewError,
    isLoading: isReviewLoading,
  } = useAxiosFetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?language=en&api_key=${api_key}`,
    false,
    false,
    false,
    false,
    "isReviews"
  );

  useEffect(() => {
    setReviews(reviewData);
  }, [reviewData]);

  /* console.log(id);
  console.log(detailsData);
  console.log(reviews); */

  return (
    <main className="main-style">
      {isDetailsLoading &&
        isCreditsLoading &&
        isTrailerLoading &&
        isReviewLoading && <p className="text-center">Loading Details...</p>}
      {!isDetailsLoading &&
        !isCreditsLoading &&
        detailsError &&
        trailerError &&
        reviewError && (
          <p className="text-rose-900 text-center">{detailsError}</p>
        )}
      {!isDetailsLoading &&
        !isCreditsLoading &&
        !isReviewLoading &&
        !detailsError &&
        !trailerError &&
        !creditsError &&
        !reviewError && (
          <MovieDetails
            width={width}
            details={details}
            credits={credits}
            trailer={trailer}
            reviews={reviews}></MovieDetails>
        )}
    </main>
  );
};

export default Details;
