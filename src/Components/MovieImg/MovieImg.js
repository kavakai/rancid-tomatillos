import React from "react";

const MovieImg = ({ movie }) => {
  return (
    <>
      <img src={movie.backdrop_path} alt={movie.title} className="backdrop" />
      <img src={movie.poster_path} alt={movie.title} className="cover" />
    </>
  );
}

export default MovieImg