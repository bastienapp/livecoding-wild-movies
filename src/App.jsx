import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Movie from './components/Movie';

function App() {

  const movies = [
    {
      title: "Opération Casse Noisette",
      year: 2017,
      poster: "https://static.fnac-static.com/multimedia/Images/BB/BB/EE/70/7401147-1505-1505-1/tsp20180314141838/Operation-Cae-Noisette-AFFICHE-CINEMA-ORIGINALE.jpg",
      description: "An incorrigibly self-serving exiled squirrel finds himself helping his former park brethren survive by raiding a nut store, a location that also happens to be a front for a human gang's bank robbery.",
      released: true,
      favourite: true
    },
    {
      title: "Le Live Coding en fin de journée",
      year: 2017,
      poster: "https://static.wixstatic.com/media/c7e7a3_3992a05ca17d44dfa47a27bf9b4a039c~mv2.png/v1/crop/x_2,y_92,w_698,h_312/fill/w_837,h_374,al_c,lg_1,q_85/nos-tacos.webp",
      description: "Un film d'horreur incroyable",
      released: false,
      favourite: false
    }
  ];

  return (
    <div className="App">
      <Header />
      <ul>
        {
          movies.map((movie) => {
            return <li className="one-movie">
              <Movie key={movie.title} {...movie} />
            </li>
          })
        }
      </ul>
      <Footer />
    </div>
  );
}

export default App;
