import React from "react";
import './MovieRating.css';
import { Link } from "react-router-dom";

const MovieRating = ({ movie, showModal, trailer, navigateHome }) => {
  return (
    <div className="place-container">
      <p>{(movie.average_rating / 2).toFixed(1)} ⭐️</p>
      {trailer.length > 30 && <button onClick={() => { showModal() }}>Watch Trailer</button>}
      <Link to="/">
        <button className="home-btn" onClick={() => navigateHome()}>Home</button>
      </Link>
    </div>
  );
}

export default MovieRating