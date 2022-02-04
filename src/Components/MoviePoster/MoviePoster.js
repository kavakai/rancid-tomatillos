import React from 'react';
import './MoviePoster.css';

const MoviePoster = ({title, releaseDate, id, averageRating}) => {
  return (
    <article>
      <h3>{title}</h3>
      <p>{releaseDate}</p>
      <p>{id}</p>
      <p>{averageRating}</p>
    </article>
  )
};

export default MoviePoster;