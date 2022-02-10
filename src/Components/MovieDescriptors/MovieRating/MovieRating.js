import React from "react";
import './MovieRating.css';
import { Link } from 'react-router-dom'

const MovieRating = ({ movie, navigateHome }) => {
  return (
    <div className="place-container">
      <p>{movie.average_rating.toFixed(1)} ⭐️</p>
      <Link to={`/`}>
      <button onClick={navigateHome}>Home</button>
      </Link>
    </div>
  );
}

export default MovieRating