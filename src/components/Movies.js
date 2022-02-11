import React from "react";
import { movies } from "../data";

function Movies() {

  const moviesDivs = movies.map((movie) => {
    const genreLis = movie.genres.map((genre) => {return(<li key={genre}>{genre}</li>)});

    return <div key={movie.title}> 
      <p>Title: {movie.title}</p>
      <p>Runtime: {movie.time} min.</p>
      <p>Movie Genres</p>
      <ul>
        {genreLis}
      </ul>
    </div>
  });

  return <div>
    <h1>Movies Page</h1>
    {moviesDivs}
  </div>;
}

export default Movies;
