import React from 'react';
import './MoviePoster.css';

const MoviePoster = ({id, poster, title, selectMovie}) => {
  return (
    <>
      <img className='poster' key={id} id={id} src={poster} alt={title} onClick={() => selectMovie(id)} />
    </>
  )
};

export default MoviePoster;