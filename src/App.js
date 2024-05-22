import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Popular from "./Popular";
import TopRated from "./TopRated";
import Details from "./Details";
import About from "./About";
import Missing from "./Missing";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
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
    toggleMenu();
    navigate("/");
  };

  const [search, setSearch] = useState("");

  const [movies, setMovies] = useState([]);

  const [topRatedMovies, setTopRatedMovies] = useState([]);

  const [upcomingMovies, setUpcomingMovies] = useState([]);

  const [genres, setGenres] = useState([]);

  const [searchResults, setSearchResults] = useState([]);

  const { width } = useWindowSize();

  const { data, fetchError, isLoading } = useAxiosFetch(
    `https://api.themoviedb.org/3/discover/movie?language=en-US&api_key=${api_key}&with_genres=${genreSearch
      .map((genreSingle) => (genreSingle.cond === true ? genreSingle.id : ""))
      .filter(isPositive)}`
  );

  useEffect(() => {
    setMovies(data);
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
    `https://api.themoviedb.org/3/movie/popular?language=en&api_key=${api_key}`,
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
    setMovies(dataPopular.results);
  }, [dataPopular]);

  const {
    data: dataTopRated,
    fetchError: topRatedError,
    isLoading: isTopRatedLoading,
  } = useAxiosFetch(
    `https://api.themoviedb.org/3/movie/top_rated?language=en&api_key=${api_key}`,
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
  }, [dataTopRated]);

  console.log(dataTopRated);

  const {
    data: dataUpcoming,
    fetchError: upcomingError,
    isLoading: isUpcomingLoading,
  } = useAxiosFetch(
    `https://api.themoviedb.org/3/movie/upcoming?language=en&api_key=${api_key}`,
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
    setUpcomingMovies(dataUpcoming.results);
  }, [dataUpcoming]);

  console.log(dataTopRated);

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
  }, [search]);

  /* console.log(searchResults); */

  return (
    <div className="bg-slate-900 text-white min-h-screen flex flex-col">
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
        isSearchLoading={isSearchLoading}></Header>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              movies={movies}
              fetchError={fetchError}
              isLoading={isLoading}
              genres={genres}
              genreError={genreError}
              isGenreLoading={isGenreLoading}
            />
          }></Route>
        <Route
          path="/popular"
          element={
            <Popular
              movies={movies}
              popularError={popularError}
              isPopularLoading={isPopularLoading}
              genres={genres}
              genreError={genreError}
              isGenreLoading={isGenreLoading}
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
