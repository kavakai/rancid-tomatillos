import React from 'react';
import './MovieInfo.css';
import MoviePoster from '../MoviePoster/MoviePoster'

const MovieInfo = ({movie, navigateHome}) => {
  return (
    <section>
      <MoviePoster />
      <img key={movie.id} src={movie.backdrop_path}/>
      <aticle>
        <p>{movie.title}</p>
        <p>{movie.average_rating}</p>
        <p>{movie.releaseDate}</p>
        <button onClick={navigateHome}>Home</button>
      </aticle>
    </section>
  )
};

export default MovieInfo;