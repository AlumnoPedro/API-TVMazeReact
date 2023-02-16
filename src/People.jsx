import React, { useState, useEffect } from 'react';
import getPeople from './services/people';

function App() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    getPeople().then((person) => setPeople(person));
  }, []);
  return (
    <div className="App">
      <h1>Listado Usuarios</h1>
      <ul>
        {people.map(() => <li>person.id</li>)}
        <li>Hola Pedro</li>
      </ul>
    </div>
  );
}

export default App;
