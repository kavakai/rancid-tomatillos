import React from "react";

const MovieText = ({ movie }) => {
  let movieDate = movie.release_date.split("-");
  movieDate = [movieDate[1], movieDate[2], movieDate[0]].join("-");
  return (
    <div className="text-section">
      <ul className="genres">
        {movie.genres.length > 0 &&
          movie.genres.map((genre, i) => {
            return <li key={i}>{genre}</li>;
          })}
      </ul>
      {movie.overview && <p className="overview">{movie.overview}</p>}
      <div className="production-info">
        {movieDate && <p>Release Date: {movieDate}</p>}
        {movie.runtime > 0 && <p>Runtime: {movie.runtime} mins</p>}
        {movie.budget > 0 && (
          <p>Budget: ${Intl.NumberFormat("en-US").format(movie.budget)}</p>
        )}
        {movie.revenue > 0 && (
          <p>Revenue: ${Intl.NumberFormat("en-US").format(movie.revenue)}</p>
        )}
      </div>
    </div>
  );
}

export default MovieText