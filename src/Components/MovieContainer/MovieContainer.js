import React from 'react';
import './MovieContainer.css';
import MoviePoster from '../MoviePoster/MoviePoster';

const MovieContainer = ({ movies }) => {
  console.log(movies)
  const posters = movies.flat(1).map(movie => {
    return (
      <MoviePoster
        poster={movie.poster_path}
        title={movie.title}
        releaseDate={movie.releaseDate}
        id={movie.id}
        averageRating={movie.averageRating}
      	key={movie.id} />)
    })
  return(
  <section className="poster-display">
    {posters}
  </section>
  )
};

export default MovieContainer;