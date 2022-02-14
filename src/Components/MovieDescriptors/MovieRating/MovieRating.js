import React from "react";
import './MovieRating.css';
import { Link } from "react-router-dom";

const MovieRating = ({ movie, navigateHome }) => {
  return (
    <div className="place-container">
      <p>{(movie.average_rating / 2).toFixed(1)} ⭐️</p>
      <Link className="place-container" to="/">
        <button onClick={() => navigateHome()}>Home</button>
      </Link>
    </div>
  );
}

export default MovieRating