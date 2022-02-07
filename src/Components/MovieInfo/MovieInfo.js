import React from 'react';
import MovieImg from '../MovieImg/MovieImg';
import './MovieInfo.css';
import MovieDescriptors from '../MovieDescriptors/MovieDescriptors';

const MovieInfo = ({ movie, navigateHome }) => {
  return (
    <section className='movie-info'>
      <MovieImg movie={movie} />
      <MovieDescriptors movie={movie} navigateHome={navigateHome} />
    </section>
  )
};

export default MovieInfo;