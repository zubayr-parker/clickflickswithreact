import React, { useState } from 'react'
import SearchBar from '../components/ui/SearchBar'
import Movie from '../components/ui/Movie'
import { useParams } from 'react-router-dom'

function Movies() {
  const {search} = useParams()
    console.log(search)

  return (
    <section id="movies">
    <div class="container">
      <div class="row">
        <div class="movies__header">
          <SearchBar/>
          <select
            name=""
            id="filter"
            class="click"
            onchange="filterMovies(event)"
          >
            <option value="" disabled selected>Sort</option>
            <option value="NEW_TO_OLD">Newest</option>
            <option value="OLD_TO_NEW">Oldest</option>
          </select>
        </div>
        <div class="movies movies__loading">
          <i class="fas fa-spinner"></i>
        </div>

        <div>

        {search} has been searched
        </div>
        
        there should be a map here where i map over a usestate varibale called movies and then it maps to a movie.jsx component
      </div>
    </div>
  </section>
  )
}

export default Movies