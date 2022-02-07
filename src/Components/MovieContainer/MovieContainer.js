import React from 'react';
import './MovieContainer.css';
import MoviePoster from '../MoviePoster/MoviePoster';

const MovieContainer = ({ movies, selectMovie }) => {
  const posters = movies.flat(1).map(movie => {
    return (
      <MoviePoster
        poster={movie.poster_path}
        selectMovie={selectMovie} 
        id={movie.id}
      	key={movie.id} />)
    })
  return(
  <section className="poster-display">
    {posters}
  </section>
  )
};

export default MovieContainer;