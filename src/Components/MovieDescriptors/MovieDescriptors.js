import React from "react";
import MovieText from "./MovieText/MovieText";
import MovieTitles from "./MovieTitles/MovieTitles";
import MovieRating from "./MovieRating/MovieRating";
import { NavLink } from "react-router-dom";

const MovieDescriptors = ({ movie, getVideos, showModal, trailer }) => {
  return (
    <article className="descriptors">
      <MovieTitles movie={movie} />
      <MovieRating movie={movie} getVideos={getVideos} showModal={showModal} trailer={trailer} />
      <MovieText movie={movie} />
    </article>
  );
}

export default MovieDescriptors