import React from 'react';
import './MoviePoster.css';
import { Link } from 'react-router-dom'

const MoviePoster = ({id, poster, title, selectMovie}) => {
  return (
    <>
      <Link to={`/movies/${id}`}>
        <img className='poster' key={id} id={id} src={poster} alt={title} onClick={() => selectMovie(id)} />
      </Link>
    </>
  )
};

export default MoviePoster;