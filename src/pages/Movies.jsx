import React, { useEffect, useState } from "react";
import SearchBar from "../components/ui/SearchBar";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Movies() {
  const { search } = useParams();
  const [movie, setMovies] = useState([]);
  const navigate = useNavigate()

  async function fetchMovies() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=2b2c579c&s=${search}`
    );
    setMovies(data.Search);
    //there is a Search object inside data from the omdb api
  }

  useEffect(() => {
    fetchMovies();
  }, [search]);

  console.log(movie);

  function renderMovies() {
    return (
      <>
        {movie
        .filter((movie) => movie.Poster != "N/A")
        .map((movie) => (
          
          <div className="movie" onClick={()=> navigate(`${movie.imdbID}`)} >
          <figure className="movie-img__wrapper">
            <img src={`${movie.Poster}`} alt="" class="movie-img" />
          </figure>
          <div className="movie__title">{`${movie.Title}`}</div>
        </div>
        ))}
        </>
    );
  }

  return (
    <section id="movies">
      <div class="container">
        <div class="row">
          <div class="movies__header">
            <SearchBar />
            <select
              name=""
              id="filter"
              class="click"
              onchange="filterMovies(event)"
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
