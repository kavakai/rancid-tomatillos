import React from 'react';
import './MoviePoster.css';

const MoviePoster = ({id, poster, selectMovie}) => {
  return (
    <>
      <img key={id} id={id} src={poster} onClick={() => selectMovie(id)} />
    </>
  )
};

export default MoviePoster;