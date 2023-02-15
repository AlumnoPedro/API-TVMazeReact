import React, { useState, useEffect } from 'react';
import './App.css';
import getPeople from './services/people';

function App() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    getPeople().then((show) => setPeople(show));
  }, []);
  return (
    <div className="App">
      <h1>Listado Usuarios</h1>
      <ul>
        {people.map(() => <li>show.id</li>)}
        <li>Hola Pedro</li>
      </ul>
    </div>
  );
}

export default App;
