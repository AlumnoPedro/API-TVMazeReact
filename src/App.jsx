import { useState, useEffect } from 'react';
import './App.css';
import { getUsuarios } from './services/usuarios';

function App() {
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    getUsuarios().then((users) => setUsuarios(users))
  }, []);
  return (
    <div className="App">
      <h1>Listado Usuarios</h1>
      <ul>
        <li></li>
      </ul>
    </div>
  )
}

export default App
