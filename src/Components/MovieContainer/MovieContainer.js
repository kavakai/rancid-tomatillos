import React from 'react';
import './MovieContainer.css';
import MoviePoster from './MoviePoster/MoviePoster';

const MovieContainer = ({ movies }) => {
  const posters = movies.map(movie => 
    <MoviePoster title={movie.title} releaseDate={movie.releaseDate} id={movie.id} averageRating={movie.averageRating} />)
  return (
    <section>
      {posters}
    </section>
  )
};

export default MovieContainer;