import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function MoviesInfo() {
  const navigate = useNavigate();
  const { imdbID } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);
  const [loading, setLoading] = useState();

  async function fetchMovieInfo() {
    setLoading(true);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?i=${imdbID}&apikey=2b2c579c`
    );
    setMovieInfo(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchMovieInfo();
  }, [imdbID]);

  return (
    <>
      {loading ? (
        <>
          <div className="container">
            <div className="row">
              <button className="back-btn" onClick={() => navigate(-1)}>
                <span className="orange">←</span> Back
              </button>
              <div className="movie--row">
              <figure className="movie-img__wrapper--selectedskeleton">
                <img src={`${movieInfo.Poster}`} alt="" className="movie-img" />
              </figure>

              <div className="movie__information">
                <div className="section__subtitle--skeleton"></div>
                <div className="section__subtitle--skeleton"></div>
                <div className="section__subtitle--skeleton"></div>
                <div className="section__subtitle--skeleton"></div>
                <div className="section__subtitle--skeleton"></div>
                <div className="section__subtitle--skeleton"></div>
                <div className="section__subtitle--skeleton"></div>
                <div className="section__subtitle--skeleton"></div>
                
              </div>
            </div>
            </div>
          </div>
        </>
      ) : (
        <div className="container">
          <div className="row">
            <button className="back-btn" onClick={() => navigate(-1)}>
              <span className="orange">←</span> Back
            </button>
            <div className="movie--row">
              <figure className="movie-img__wrapper--selected">
                <img src={`${movieInfo.Poster}`} alt="" className="movie-img" />
              </figure>

              <div className="movie__information">
                <div className="section__subtitle">{movieInfo.Title}</div>
                <b>Release:</b> {movieInfo.Year}
                <br />
                <br />
                <b>Genre:</b> {movieInfo.Genre}
                <br />
                <br />
                <b>Rating:</b> {movieInfo.imdbRating}
                <br />
                <br />
                <b>Director:</b> {movieInfo.Director}
                <br />
                <br />
                <b>Starring:</b> {movieInfo.Actors}
                <br />
                <br />
                <b>Plot:</b> {movieInfo.Plot}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MoviesInfo;
