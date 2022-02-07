import React from "react";

const MovieTitles = ({ movie }) => {
  return (
    <div className="title-tag">
      {movie.title && <h2>{movie.title}</h2>}
      {movie.tagline && <h4>"{movie.tagline}"</h4>}
    </div>
  );
}

export default MovieTitles