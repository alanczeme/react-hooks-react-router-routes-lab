import React from "react";
import { directors } from "../data";

function Directors() {
  const directorDivs = directors.map(director => {
    const directorMoviesLis = director.movies.map(movie => {
      return <li key={movie}>{movie}</li>;
    })
    return <div key={director.name}>
      <p>{director.name}</p>
      <p>Movies</p>
      <ul>{directorMoviesLis}</ul>
      </div>;
  })

  return <div>
    <h1>Directors Page</h1>
    {directorDivs}
  </div>;
}

export default Directors;
