import React from 'react';
import './MoviePoster.css';
import { NavLink } from 'react-router-dom'

const MoviePoster = ({id, poster, title, selectMovie}) => {
  return (
    <>
      <NavLink to={`/${id}`}>
        <img className='poster' key={id} id={id} src={poster} alt={title} />
      </NavLink>
    </>
  )
};

export default MoviePoster;