import React from 'react';
import './MoviePoster.css';

const MoviePoster = ({title, releaseDate, id, averageRating, poster}) => {
  return (
    <>
      <img src={poster} />
      {/* <h3>{title}</h3>
      <p>{releaseDate}</p>
      <p>{id}</p>
      <p>{averageRating}</p> */}
    </>
  )
};

export default MoviePoster;