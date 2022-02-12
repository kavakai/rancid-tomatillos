import React from "react";
import './MovieRating.css';
import { Link } from "react-router-dom";

const MovieRating = ({ movie, getVideos, showModal, trailer }) => {
  console.log(trailer)
  return (
    <div className="place-container">
      <p>{movie.average_rating.toFixed(1)} ⭐️</p>
      <Link className="place-container" to="/">
        <button>Home</button>
      </Link>
      {trailer.length > 30 && <button onClick={() => { showModal() }}>Watch Trailer</button>}
    </div>
  );
}

export default MovieRating