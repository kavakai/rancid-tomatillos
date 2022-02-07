import React from "react";
import './MovieRating.css';

const MovieRating = ({ movie, navigateHome }) => {
  return (
    <div className="place-container">
      <p>{movie.average_rating.toFixed(1)} ⭐️</p>
      <button onClick={navigateHome}>Home</button>
    </div>
  );
}

export default MovieRating