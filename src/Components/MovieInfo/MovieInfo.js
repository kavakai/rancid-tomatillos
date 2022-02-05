import React from 'react';
import './MovieInfo.css';
import MoviePoster from '../MoviePoster/MoviePoster'

const MovieInfo = ({ movie, navigateHome }) => {
  console.log(movie)
  return (
    <section>
      <img src={movie.poster_path}/>
      <img src={movie.backdrop_path}/>
      <article>
        <p>{movie.title}</p>
        <p>{movie.average_rating}</p>
        <p>{movie.release_date}</p>
        <button onClick={navigateHome}>Home</button>
      </article>
    </section>
  )
};

export default MovieInfo;