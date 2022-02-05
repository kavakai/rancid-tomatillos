import React from 'react';
import './MovieContainer.css';
import MoviePoster from '../MoviePoster/MoviePoster';

const MovieContainer = ({ movies, selectMovie }) => {
  console.log(movies)
  const posters = movies.flat(1).map(movie => {
    return (
      <MoviePoster
        poster={movie.poster_path}
        selectMovie={selectMovie} 
      	key={movie.id} />)
    })
  return(
  <section className="poster-display">
    {posters}
  </section>
  )
};

export default MovieContainer;