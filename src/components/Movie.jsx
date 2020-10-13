import React from 'react';
import './Movie.css';

const Movie = () => {

  const title = "Opération Casse Noisette";
  const poster = "https://static.fnac-static.com/multimedia/Images/BB/BB/EE/70/7401147-1505-1505-1/tsp20180314141838/Operation-Cae-Noisette-AFFICHE-CINEMA-ORIGINALE.jpg";
  const description = "An incorrigibly self-serving exiled squirrel finds himself helping his former park brethren survive by raiding a nut store, a location that also happens to be a front for a human gang's bank robbery.";

  return (
    <main className="Movie">
      <img src={poster} alt={title} />
      <div>
        <h3>Opération Casse Noisette</h3>
        <p>{description}</p>
      </div>
    </main>
  )
}

export default Movie;