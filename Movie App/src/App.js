import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";

const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMovies(APIURL);
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setMovies(data.results);
      });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(SEARCHAPI + searchTerm);

      setSearchTerm("");
    }
  };

  const changeHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <React.Fragment>
      <header>
        <h2> Tashif's ReactApp</h2>
        <form onSubmit={formSubmitHandler}>
          <input
            className="search"
            placeholder="Search for a movie"
            type="search"
            value={searchTerm}
            onChange={changeHandler}
          />
        </form>
      </header>

      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </React.Fragment>
  );
}

export default App;
