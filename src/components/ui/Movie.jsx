import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Movie() {
  const [movie,setMovies] = useState()


  async function fetchMovies() {
    console.log("api has been fetched")
    const {data} = await axios.get(`https://www.omdbapi.com/?apikey=2b2c579c&s=fast`)
    setMovies(data.Search)
    //there is a Search object inside data from the omdb api   
  }
  
  console.log(movie)
  
  useEffect(()=>{fetchMovies()},[])
  
  return (
    <div class="movie">   
    <figure class="movie-img__wrapper no-cursor">
      <img
        src={`${movie.Poster}`}
        alt=""
        class="movie-img"
      />
    </figure>
    <div class="movie__title">
      {`${movie.Title}`}
      ye
      </div>
  </div>
  )
}

export default Movie