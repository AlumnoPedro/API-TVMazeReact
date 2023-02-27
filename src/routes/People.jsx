import {
  NavLink,
} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  getPeople,
  getPerson,
}
  from '../services/people';
import '../style.css';
import SearchBox from '../components/SearchBox';
import Navbar from '../components/Navbar';

export async function loader({ params }) {
  const person = await getPerson(params.personId);
  if (!person) {
    throw new Response('', {
      status: 404,
      statusText: 'Not Found',
    });
  }
  return person;
}

const mostrarImagen = async (param) => {
  const persona = await getPerson(param);
  console.log(persona.image.original);
  return (
    <div className="col-md-6">
      <img
        src={persona.image.original || null}
        alt="Error"
      />
    </div>
  );
};

function People() {
  const [search, setSearch] = useState('');
  const [people, setPeople] = useState([]);
  useEffect(() => {
    getPeople().then((personas) => setPeople(personas));
  }, []);
  const filterPeople = people.filter((person) => person.name.toLowerCase()
    .includes(search.toLowerCase()));
  return (
    <div>
      <Navbar />
      <SearchBox
        placeholder="Búsqueda People"
        onSearchChange={(e) => setSearch(e.target.value)}
      />
      <h1 className="text-center">Listado People</h1>
      <div className="row">
        <div className="col-md-6">
          <ul className="lista text-center">
            {filterPeople.map((person) => (
              <div>
                <li key={person.id} className="li__body">
                  <button type="submit" key={person.id} onClick={() => mostrarImagen(person.id)}>Cargar Imagen</button>
                  <NavLink
                    to={`${person.id}`}
                  >
                    {person.name ? (
                      <>
                        {person.name}
                        {' '}
                        {person.id}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}
                    {' '}
                  </NavLink>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default People;
