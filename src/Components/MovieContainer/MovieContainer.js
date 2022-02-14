import React from 'react';
import './MovieContainer.css';
import MoviePoster from '../MoviePoster/MoviePoster';

const MovieContainer = ({ movies, selectMovie, filteredMovies, filterMovies }) => {
  let newMovies;
  filteredMovies.length > 0 ? newMovies = filteredMovies : newMovies = movies;
  console.log(newMovies, 'movie array in container')
  const posters = newMovies.map(movie => {
    return (
      <MoviePoster
        poster={movie.poster_path}
        selectMovie={selectMovie} 
        id={movie.id}
      	key={movie.id} />)
  })
  return (
    <>
      <section className="poster-display">
        { posters }
      </section>
    </>
  )
};

export default MovieContainer;