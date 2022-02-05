import React from 'react';
import './MovieInfo.css';

const MovieInfo = ({ movie, navigateHome }) => {
  let movieDate = movie.release_date.split('-');
  movieDate = [movieDate[1], movieDate[2], movieDate[0]].join('-');
  return (
    <section className='movie-info'>
      <img src={movie.backdrop_path} alt={movie.title} className='backdrop'/>
      <img src={movie.poster_path} alt={movie.title} className='cover'/>
      <article className='descriptors'>
        <div className='title-tag'>
          {movie.title && <h2>{movie.title}</h2>}
          {movie.tagline && <h4>"{movie.tagline}"</h4>}
        </div>  
        <p>{movie.average_rating.toFixed(1)}  ⭐️</p>
        <ul className='genres'>
        {movie.genres.length && movie.genres.map((genre, i) => {
          return (
            <li key={i}>{genre}</li>
          )
        })}
        </ul>
        {movieDate && <p>Release Date: {movieDate}</p>}
        <div>
          {movie.runtime && <p>Runtime: {movie.runtime} mins</p>}
          {movie.budget > 0 && <p>Budget: ${Intl.NumberFormat('en-US').format(movie.budget)}</p>}
          {movie.revenue > 0 && <p>Revenue: ${Intl.NumberFormat('en-US').format(movie.revenue)}</p>}
        </div>
        <button onClick={navigateHome}>Home</button>
      </article>
    </section>
  )
};

export default MovieInfo;