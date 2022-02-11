import React from "react";
import './MovieRating.css';
import { Link } from "react-router-dom";

const MovieRating = ({ movie }) => {
  return (
    <div className="place-container">
      <p>{movie.average_rating.toFixed(1)} ⭐️</p>
      <Link className="place-container" to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}

export default MovieRating