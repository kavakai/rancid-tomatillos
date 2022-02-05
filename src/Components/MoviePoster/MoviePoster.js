import React from 'react';
import './MoviePoster.css';

const MoviePoster = ({id, poster, selectMovie}) => {
  return (
    <>
      <img key={id} src={poster} onClick={selectMovie(id)} />
    </>
  )
};

export default MoviePoster;