import React, { useEffect, useState } from 'react'
import SearchBar from '../components/ui/SearchBar'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MoviesInfo() {
  const { imdbID } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);

  async function fetchMovieInfo() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?i=${imdbID}&apikey=2b2c579c`
    );
    setMovieInfo(data);
  }
  console.log(movieInfo)

  useEffect(() => {
    fetchMovieInfo();
  }, [imdbID]);
  return (
    <>
    <div className="container">
      <div className="row">
    
    <div className="movie--row">

    <figure className="movie-img__wrapper--selected no-cursor">
            <img src={`${movieInfo.Poster}`} alt="" class="movie-img" />
          </figure>
    
    <div className="movie__information">
      <div className="section__subtitle">

    {movieInfo.Title} 
      </div>
    
    <b>Release:</b> {movieInfo.Year}
    <br/>
    <br/>
    <b>Genre:</b> {movieInfo.Genre}
    <br/>
    <br/>
    <b>Rating:</b> {movieInfo.imdbRating}
    <br/>
    <br/>
    <b>Director:</b> {movieInfo.Director}
    <br/>
    <br/>
    <b>Starring:</b> {movieInfo.Actors}
    <br/>
    <br/>
    <b>Plot:</b> {movieInfo.Plot}

    </div>
    
    </div>

      </div>
    </div>
   
    </>
  )
}

export default MoviesInfo