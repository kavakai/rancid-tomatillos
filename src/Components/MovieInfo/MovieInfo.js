import React from 'react';
import MovieImg from '../MovieImg/MovieImg';
import './MovieInfo.css';
import MovieDescriptors from '../MovieDescriptors/MovieDescriptors';
import MovieText from '../MovieDescriptors/MovieText/MovieText';

const MovieInfo = ({ movie, navigateHome }) => {
  console.log('selectedMovie', movie)
  return (
    <section className='movie-info'>
      <MovieImg movie={movie} />
      <MovieDescriptors movie={movie} navigateHome={navigateHome} />
    </section>
  )
};

export default MovieInfo;