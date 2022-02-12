import React from 'react';
import './MovieContainer.css';
import MoviePoster from '../MoviePoster/MoviePoster';
import Sidebar from '../Sidebar/Sidebar';


const MovieContainer = ({ movies, selectMovie, filteredMovies, filterMovies }) => {
  let newMovies;
  filteredMovies.length ? newMovies = filteredMovies : newMovies = movies;
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
      <Sidebar />
      <section className="poster-display">
        { filteredMovies.length ?
         filteredMovies :
         posters }
      </section>
    </>
  )
};

export default MovieContainer;