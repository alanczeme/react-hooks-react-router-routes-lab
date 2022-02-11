import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsDiv = actors.map((actor) => {
    const actorMoviesLis = actor.movies.map((movie) => {
      return <li key={movie}>{movie}</li>
    })
    return <div key={actor.name}>
      {actor.name}
      <ul>{actorMoviesLis}</ul>
      </div>
  })

  return <div>
    <h1>Actors Page</h1>
    {actorsDiv}
  </div>;
}

export default Actors;
