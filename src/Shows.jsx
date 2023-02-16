import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import getShows from './services/shows';
import './style.css';

function App() {
  const [shows, setShows] = useState([]);
  useEffect(() => {
    getShows().then((series) => setShows(series));
  }, []);
  return (
    <div>
      <h1 className="text-center">Listado Shows</h1>
      {shows.map((show) => (
        <div key={show.id} className="row">
          <div className="col-md-6">
            <ul className="lista text-center">
              <li>{show.name}</li>
            </ul>
          </div>
          <div className="col-md-6">
            <div className="cards">
              <img className="card-img-top medida" src={show.image != null ? show.image.original : './img/no-image.jpg'} alt="" />
              <div className="card-body">
                <h4 className="card-title">
                  Nombre:
                  {show.name}
                </h4>
                <a href="./episodios.html?id={show.id}"><h5 className="card-title">Ver episodios</h5></a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
