import React, { useEffect, useState } from "react";
import SearchBar from "../components/ui/SearchBar";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Movies() {
  const { search } = useParams();
  const [loading, setLoading] = useState();
  const [movie, setMovies] = useState([]);
  const navigate = useNavigate();

  
  async function fetchMovies() {
    setLoading(true);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=2b2c579c&s=${search}`
    );
    setMovies(data.Search);
    setLoading(false);
    
    //there is a Search object inside data from the omdb api
  }

  useEffect(() => {
    fetchMovies();
  }, [search]);

  function filterMovies(filter) {
    if (filter === "OLD_TO_NEW") {
      setMovies(movie.slice().sort((a, b) => a.Year - b.Year));
    }
    if (filter === "NEW_TO_OLD") {
      setMovies(movie.slice().sort((a, b) => b.Year - a.Year));
    }
  }

  function renderMovies() {
    if (movie !== undefined) {
      return loading
        ? new Array(10).fill(0).map((_,index) => (
            <>
              <div className="movie" key={index}>
                <div className="movie-img__wrapper--skeleton"></div>
                <div className="movie__title--skeleton"></div>
              </div>
            </>
          ))
        : movie
            .filter((movie) => movie.Poster !== "N/A")
            .filter((movie) => movie.Year > 1920)
            .map((movie) => (
              <div
                className="movie"
                onClick={() => navigate(`${movie.imdbID}`)}
              >
                <figure className="movie-img__wrapper">
                  <img
                    src={`${movie.Poster}`}
                    alt=""
                    className="movie-img"
                  />
                </figure>
                <div className="movie__title">{`${movie.Title}`}</div>
              </div>
            ));
    }

    return "Error 404: No movies found!";
  }

  return (
    <section id="movies">
      <div className="container">
        <div className="row">
          <div className="movies__header">
            <SearchBar />
            <select
            defaultValue=""
              name=""
              id="filter"
              className="click"
              onChange={(event) => filterMovies(event.target.value)}
            >
              <option value="" disabled selected>
                Sort
              </option>
              <option value="NEW_TO_OLD">Newest</option>
              <option value="OLD_TO_NEW">Oldest</option>
            </select>
          </div>
          <div className="movies">{renderMovies()}</div>
        </div>
      </div>
    </section>
  );
}

export default Movies;
