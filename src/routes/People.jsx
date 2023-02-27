import {
  NavLink, useLoaderData,
} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  getPeople,
}
  from '../services/people';
import '../style.css';
import SearchBox from '../components/SearchBox';
import Navbar from '../components/Navbar';

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
              <li key={person.id} className="li__body">
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
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default People;
