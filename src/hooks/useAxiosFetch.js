import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosFetch = (
  dataUrl,
  isGenre,
  isDetails,
  isCredits,
  isTrailer,
  isReviews,
  isSearch,
  isTopRated,
  isPopular,
  isUpcoming
) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async (url) => {
      setIsLoading(true);
      try {
        const response = await axios.get(url, {
          cancelToken: source.token,
        });
        if (isMounted) {
          setData(
            isGenre
              ? response.data.genres
              : isDetails
              ? response.data
              : isCredits
              ? response.data
              : isTrailer
              ? response.data.results
              : isReviews
              ? response.data.results
              : isSearch
              ? response.data.results
              : isTopRated
              ? response.data
              : isPopular
              ? response.data
              : isUpcoming
              ? response.data
              : response.data
          );
          setFetchError(null);
        }
      } catch (err) {
        if (isMounted) {
          setFetchError(err.message);
          setData([]);
        }
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    fetchData(dataUrl);

    const cleanUp = () => {
      console.log("AxiosFetch: Clean Up Function");
      isMounted = false;
      source.cancel();
    };

    return cleanUp;
  }, [
    dataUrl,
    isCredits,
    isDetails,
    isGenre,
    isPopular,
    isReviews,
    isSearch,
    isTopRated,
    isTrailer,
    isUpcoming,
  ]);

  return { data, fetchError, isLoading };
};

export default useAxiosFetch;
