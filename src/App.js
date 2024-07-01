import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import MainMovies from "./MainMovies";
import Details from "./Details";
import About from "./About";
import Missing from "./Missing";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import useWindowSize from "./hooks/useWindowSize";
import useAxiosFetch from "./hooks/useAxiosFetch";

function App() {
  const api_key = "06f4f010260b5d81753323c62f046f17";

  const navigate = useNavigate();

  const [genreSearch, setGenreSearch] = useState([
    {
      id: 28,
      name: "Action",
      cond: false,
    },
    {
      id: 12,
      name: "Adventure",
      cond: false,
    },
    {
      id: 16,
      name: "Animation",
      cond: false,
    },
    {
      id: 35,
      name: "Comedy",
      cond: false,
    },
    {
      id: 80,
      name: "Crime",
      cond: false,
    },
    {
      id: 99,
      name: "Documentary",
      cond: false,
    },
    {
      id: 18,
      name: "Drama",
      cond: false,
    },
    {
      id: 10751,
      name: "Family",
      cond: false,
    },
    {
      id: 14,
      name: "Fantasy",
      cond: false,
    },
    {
      id: 36,
      name: "History",
      cond: false,
    },
    {
      id: 27,
      name: "Horror",
      cond: false,
    },
    {
      id: 10402,
      name: "Music",
      cond: false,
    },
    {
      id: 9648,
      name: "Mystery",
      cond: false,
    },
    {
      id: 10749,
      name: "Romance",
      cond: false,
    },
    {
      id: 878,
      name: "Science Fiction",
      cond: false,
    },
    {
      id: 10770,
      name: "TV Movie",
      cond: false,
    },
    {
      id: 53,
      name: "Thriller",
      cond: false,
    },
    {
      id: 10752,
      name: "War",
      cond: false,
    },
    {
      id: 37,
      name: "Western",
      cond: false,
    },
  ]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const hamButton = document.getElementById("hamburger-button");
  const mobileMenu = document.getElementById("nav-menu");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    hamButton.classList.toggle("toggle-btn");
    setIsMenuOpen(!isMenuOpen);
  };

  /* const isPositive = (value) => {
    return value !== "";
  }; */

  // Main Declarations

  const [search, setSearch] = useState("");

  const [movies, setMovies] = useState([]);

  const [popularMovies, setPopularMovies] = useState([]);

  const [topRatedMovies, setTopRatedMovies] = useState([]);

  const [upcomingMovies, setUpcomingMovies] = useState([]);

  const [genres, setGenres] = useState([]);

  const [searchResults, setSearchResults] = useState([]);

  const { width } = useWindowSize();

  const [currentPage, setCurrentPage] = useState(1);

  const [totalPages, setTotalPages] = useState(1);
  const [topRatedTotalPages, setTopRatedTotalPages] = useState(1);
  const [popularTotalPages, setPopularTotalPages] = useState(1);
  const [upcomingTotalPages, setUpcomingTotalPages] = useState(1);

  // Filter Application

  const [tempGenreSearch, setTempGenreSearch] = useState([...genreSearch]);
  const [tempRatingValue, setTempRatingValue] = useState([0, 10]);
  const [ratingValue, setRatingValue] = useState([0, 10]);
  const [hasChanges, setHasChanges] = useState(false);

  // Filter Functions

  const handleChanges = () => {
    setHasChanges(true);
  };

  const handleCheck = (id) => {
    const listGenres = tempGenreSearch.map((genreSingle) =>
      genreSingle.id === id
        ? { ...genreSingle, cond: !genreSingle.cond }
        : genreSingle
    );

    if (width < 1280) {
      setGenreSearch(listGenres);
    }

    setTempGenreSearch(listGenres);
    /* console.log(listGenres); */
    handleChanges();
    const selectedGenres = listGenres
      .filter((genre) => genre.cond)
      .map((genre) => genre.name)
      .join("+");

    if (width < 1280) {
      toggleMenu();
      navigate(
        selectedGenres ? `/discover/${selectedGenres}` : "/discover/all"
      );
    }
  };

  const getSelectedGenres = (genreSearch, key = "id") => {
    return genreSearch
      .filter((genreSingle) => genreSingle.cond)
      .map((genreSingle) => genreSingle[key]);
  };

  const handleSliderChange = (event, newValue) => {
    event.preventDefault();
    setTempRatingValue(newValue);
    handleChanges();
    console.log(ratingValue);
  };

  const handleApplyFilters = () => {
    setHasChanges(false);
    setGenreSearch(tempGenreSearch);
    setRatingValue(tempRatingValue);

    const selectedGenres = getSelectedGenres(tempGenreSearch, "name").join("+");
    console.log(selectedGenres);
    navigate(selectedGenres ? `/discover/${selectedGenres}` : "/discover/all");
  };

  /* const { selectedGenres } = useParams(); */

  /* const genresString = selectedGenres
    ? selectedGenres.split("+")
    : getSelectedGenres(genreSearch, "name").join("+"); */

  const { data, fetchError, isLoading } = useAxiosFetch(
    `https://api.themoviedb.org/3/discover/movie?language=en-US&api_key=${api_key}&with_genres=${getSelectedGenres(
      genreSearch
    ).join(",")}&page=${currentPage}&vote_average.gte=${
      ratingValue[0]
    }&vote_average.lte=${ratingValue[1]}`
  );

  useEffect(() => {
    if (data && data.results) {
      setMovies(data.results);
      setTotalPages(data.total_pages);
    }
  }, [data]);

  /* console.log(
    "id",
    genreSearch
      .map((genreSingle) => (genreSingle.cond === true ? genreSingle.id : ""))
      .filter(isPositive)
  ); */

  const {
    data: dataGenre,
    fetchError: genreError,
    isLoading: isGenreLoading,
  } = useAxiosFetch(
    `https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${api_key}`,
    "isGenre"
  );

  useEffect(() => {
    setGenres(dataGenre);
  }, [dataGenre]);

  // Main Functions

  const {
    data: dataPopular,
    fetchError: popularError,
    isLoading: isPopularLoading,
  } = useAxiosFetch(
    `https://api.themoviedb.org/3/movie/popular?language=en&page=${currentPage}&api_key=${api_key}`,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    "isPopular"
  );

  useEffect(() => {
    setPopularMovies(dataPopular.results);
    setPopularTotalPages(dataPopular.total_pages);
  }, [dataPopular]);

  const {
    data: dataTopRated,
    fetchError: topRatedError,
    isLoading: isTopRatedLoading,
  } = useAxiosFetch(
    `https://api.themoviedb.org/3/movie/top_rated?language=en&page=${currentPage}&api_key=${api_key}`,
    false,
    false,
    false,
    false,
    false,
    false,
    "isTopRated"
  );

  useEffect(() => {
    setTopRatedMovies(dataTopRated.results);
    setTopRatedTotalPages(dataTopRated.total_pages);
  }, [dataTopRated, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  /* console.log(dataTopRated); */

  const {
    data: dataUpcoming,
    fetchError: upcomingError,
    isLoading: isUpcomingLoading,
  } = useAxiosFetch(
    `https://api.themoviedb.org/3/movie/upcoming?language=en&page=${currentPage}&api_key=${api_key}`,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    "isUpcoming"
  );

  useEffect(() => {
    if (dataUpcoming && dataUpcoming.results) {
      setUpcomingMovies(dataUpcoming.results);
      setUpcomingTotalPages(dataUpcoming.total_pages || 1);
    }
  }, [dataUpcoming]);

  /* console.log(dataTopRated); */

  const {
    data: searchData,
    fetchError: searchError,
    isLoading: isSearchLoading,
  } = useAxiosFetch(
    `https://api.themoviedb.org/3/search/movie?query=${search}&language=en&api_key=${api_key}`,
    false,
    false,
    false,
    false,
    false,
    search
  );

  useEffect(() => {
    console.log(search);
    console.log(searchData);
    if (searchData) {
      setSearchResults(searchData);
    }
  }, [searchData, search]);

  /* console.log(searchResults); */

  return (
    <div className="bg-[#F9F6EE] text-black min-h-screen flex flex-col">
      <Header
        search={search}
        setSearch={setSearch}
        genreSearch={genreSearch}
        setGenreSearch={setGenreSearch}
        handleCheck={handleCheck}
        toggleMenu={toggleMenu}
        width={width}
        searchResults={searchResults}
        searchError={searchError}
        isSearchLoading={isSearchLoading}
        setCurrentPage={setCurrentPage}
        genres={genres}
        isMenuOpen={isMenuOpen}></Header>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              popularMovies={popularMovies}
              popularError={popularError}
              isPopularLoading={isPopularLoading}
              topRatedMovies={topRatedMovies}
              topRatedError={topRatedError}
              isTopRatedLoading={isTopRatedLoading}
              upcomingMovies={upcomingMovies}
              upcomingError={upcomingError}
              isUpcomingLoading={isUpcomingLoading}
              genres={genres}
              genreError={genreError}
              isGenreLoading={isGenreLoading}
              width={width}
              isMenuOpen={isMenuOpen}
            />
          }></Route>
        <Route
          path="/discover/:selectedGenres"
          element={
            <MainMovies
              componentTitle={"Discover Movies"}
              movies={movies}
              fetchError={fetchError}
              isLoading={isLoading}
              genres={genres}
              genreError={genreError}
              isGenreLoading={isGenreLoading}
              currentPage={currentPage}
              totalPages={totalPages}
              handlePageChange={handlePageChange}
              width={width}
              handleCheck={handleCheck}
              genreSearch={tempGenreSearch}
              ratingValue={tempRatingValue}
              setRatingValue={setRatingValue}
              handleSliderChange={handleSliderChange}
              handleChanges={handleChanges}
            />
          }></Route>
        <Route
          path="/popular"
          element={
            <MainMovies
              componentTitle={"Popular Movies"}
              movies={popularMovies}
              fetchError={popularError}
              isLoading={isPopularLoading}
              genres={genres}
              genreError={genreError}
              isGenreLoading={isGenreLoading}
              currentPage={currentPage}
              totalPages={popularTotalPages}
              handlePageChange={handlePageChange}
              width={width}
              handleCheck={handleCheck}
              genreSearch={tempGenreSearch}
              ratingValue={tempRatingValue}
              setRatingValue={setRatingValue}
              handleSliderChange={handleSliderChange}
              handleChanges={handleChanges}
            />
          }></Route>
        <Route
          path="/top-rated"
          element={
            <MainMovies
              componentTitle={"Top Rated Movies"}
              movies={topRatedMovies}
              fetchError={topRatedError}
              isLoading={isTopRatedLoading}
              genres={genres}
              genreError={genreError}
              isGenreLoading={isGenreLoading}
              currentPage={currentPage}
              totalPages={topRatedTotalPages}
              handlePageChange={handlePageChange}
              width={width}
              handleCheck={handleCheck}
              genreSearch={tempGenreSearch}
              ratingValue={tempRatingValue}
              setRatingValue={setRatingValue}
              handleSliderChange={handleSliderChange}
              handleChanges={handleChanges}
            />
          }></Route>
        <Route
          path="/upcoming"
          element={
            <MainMovies
              componentTitle={"Upcoming Movies"}
              movies={upcomingMovies}
              fetchError={upcomingError}
              isLoading={isUpcomingLoading}
              genres={genres}
              genreError={genreError}
              isGenreLoading={isGenreLoading}
              currentPage={currentPage}
              totalPages={upcomingTotalPages}
              handlePageChange={handlePageChange}
              width={width}
              handleCheck={handleCheck}
              genreSearch={tempGenreSearch}
              ratingValue={tempRatingValue}
              setRatingValue={setRatingValue}
              handleSliderChange={handleSliderChange}
              handleChanges={handleChanges}
            />
          }></Route>
        <Route
          exact
          path="movie/:id"
          element={
            <Details api_key={api_key} width={width} isMenuOpen={isMenuOpen} />
          }></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<Missing />}></Route>
      </Routes>
      <Footer width={width}></Footer>
      {hasChanges && width >= 1280 && (
        <button
          onClick={handleApplyFilters}
          className="fixed bottom-0 w-full p-3 bg-[#1A936F] text-black rounded-lg shadow-lg">
          Apply Filters
        </button>
      )}
    </div>
  );
}

export default App;
