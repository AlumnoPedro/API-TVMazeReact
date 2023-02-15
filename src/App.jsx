import React, { useState, useEffect } from 'react';
import './App.css';
import getShows from './services/shows';

function App() {
  const [shows, setShows] = useState([]);
  useEffect(() => {
    getShows().then((show) => setShows(show));
  }, []);
  return (
    <div className="App">
      <h1>Listado Usuarios</h1>
      <ul>
        {shows.map(() => <li>show.id</li>)}
        <li>Hola Pedro</li>
      </ul>
    </div>
  );
}

export default App;
