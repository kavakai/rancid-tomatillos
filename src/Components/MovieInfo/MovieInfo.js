import React from 'react';
import './MovieInfo.css';

const MovieInfo = ({ movie, navigateHome }) => {
  console.log(movie.release_date.split('-'))
  return (
    <section className='movie-info'>
      <img src={movie.backdrop_path} className='backdrop'/>
      <img src={movie.poster_path} className='cover'/>
      <article className='descriptors'>
        <h1>{movie.title}</h1>
        <p>{Math.round(movie.average_rating)}  ⭐️</p>
        <p>Release Date: {movie.release_date}</p>
        <button onClick={navigateHome}>Home</button>
      </article>
    </section>
  )
};

export default MovieInfo;