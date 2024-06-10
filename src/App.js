import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Discover from "./Discover";
import Popular from "./Popular";
import TopRated from "./TopRated";
import Details from "./Details";
import About from "./About";
import Missing from "./Missing";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import useWindowSize from "./hooks/useWindowSize";
import useAxiosFetch from "./hooks/useAxiosFetch";
import Upcoming from "./Upcoming";

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

  const hamButton = document.getElementById("hamburger-button");
  const mobileMenu = document.getElementById("nav-menu");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    hamButton.classList.toggle("toggle-btn");
  };

  const isPositive = (value) => {
    return value !== "";
  };

  const handleCheck = (id) => {
    const listGenres = genreSearch.map((genreSingle) =>
      genreSingle.id === id
        ? { ...genreSingle, cond: !genreSingle.cond }
        : genreSingle
    );
    setGenreSearch(listGenres);
    const selectedGenres = listGenres
      .filter((genre) => genre.cond)
      .map((genre) => genre.name)
      .join("+");
    toggleMenu();
    navigate(`/discover/${selectedGenres}`);
  };

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

  const getSelectedGenres = (genreSearch) => {
    return genreSearch
      .map((genreSingle) => (genreSingle.cond === true ? genreSingle.id : ""))
      .filter(isPositive);
  };

  const { selectedGenres } = useParams();

  const genresString = selectedGenres || getSelectedGenres(genreSearch);

  const { data, fetchError, isLoading } = useAxiosFetch(
    `https://api.themoviedb.org/3/discover/movie?language=en-US&api_key=${api_key}&with_genres=${genresString}&page=${currentPage}`
  );

  useEffect(() => {
    setMovies(data);
    setTotalPages(data.total_pages);
  }, [data, genreSearch]);

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
    setSearchResults(searchData);
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
        genres={genres}></Header>
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
            />
          }></Route>
        <Route
          path="/discover/:selectedGenres"
          element={
            <Discover
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
            />
          }></Route>
        <Route
          path="/popular"
          element={
            <Popular
              popularMovies={popularMovies}
              popularError={popularError}
              isPopularLoading={isPopularLoading}
              genres={genres}
              genreError={genreError}
              isGenreLoading={isGenreLoading}
              currentPage={currentPage}
              popularTotalPages={popularTotalPages}
              handlePageChange={handlePageChange}
              width={width}
            />
          }></Route>
        <Route
          path="/top-rated"
          element={
            <TopRated
              topRatedMovies={topRatedMovies}
              topRatedError={topRatedError}
              isTopRatedLoading={isTopRatedLoading}
              genres={genres}
              genreError={genreError}
              isGenreLoading={isGenreLoading}
              currentPage={currentPage}
              topRatedTotalPages={topRatedTotalPages}
              handlePageChange={handlePageChange}
              width={width}
            />
          }></Route>
        <Route
          path="/upcoming"
          element={
            <Upcoming
              upcomingMovies={upcomingMovies}
              upcomingError={upcomingError}
              isUpcomingLoading={isUpcomingLoading}
              genres={genres}
              genreError={genreError}
              isGenreLoading={isGenreLoading}
              currentPage={currentPage}
              upcomingTotalPages={upcomingTotalPages}
              handlePageChange={handlePageChange}
              width={width}
            />
          }></Route>
        <Route
          exact
          path="movie/:id"
          element={<Details api_key={api_key} width={width} />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<Missing />}></Route>
      </Routes>
      <Footer width={width}></Footer>
    </div>
  );
}

export default App;
