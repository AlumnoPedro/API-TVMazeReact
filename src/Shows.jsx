import React, { useState, useEffect } from 'react';
import './App.css';
import getShows from './services/shows';

function App() {
  const [shows, setShows] = useState([]);
  useEffect(() => {
    getShows().then((series) => setShows(series));
  }, []);
  return (
    <div className="App">
      <h1>Listado Shows</h1>
      {shows.map((show) => (
        <div key={show.id}>
          <ul>
            <li>{show.name}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;
