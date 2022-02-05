import React from 'react';
import './MovieInfo.css';

const MovieInfo = ({ movie, navigateHome }) => {
  let movieDate = movie.release_date.split('-');
  movieDate = [movieDate[1], movieDate[2], movieDate[0]].join('-');
  return (
    <section className='movie-info'>
      <img src={movie.backdrop_path} className='backdrop'/>
      <img src={movie.poster_path} className='cover'/>
      <article className='descriptors'>
        <h1>{movie.title}</h1>
        <p>{movie.average_rating.toFixed(1)}  ⭐️</p>
        <p>Release Date: {movieDate}</p>
        <button onClick={navigateHome}>Home</button>
      </article>
    </section>
  )
};

export default MovieInfo;