import {
  NavLink,
} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import getShows from '../services/shows';
import '../style.css';
import SearchBox from '../components/SearchBox';
import Navbar from '../components/Navbar';

function Shows() {
  const [search, setSearch] = useState('');
  const [shows, setShows] = useState([]);
  useEffect(() => {
    getShows().then((series) => setShows(series));
  }, []);
  const filterShow = shows.filter((show) => show.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <div>
      <Navbar />
      <SearchBox
        placeholder="Búsqueda People"
        onSearchChange={(e) => setSearch(e.target.value)}
      />
      <h1 className="text-center">Listado Shows</h1>
      {filterShow.map((show) => (
        <li key={show.id} className="li__body">
          <NavLink
            to={`people/${show.id}`}
          >
            {show.name ? (
              <>
                {show.name}
                {' '}
                {show.id}
              </>
            ) : (
              <i>No Name</i>
            )}
            {' '}
          </NavLink>
        </li>
      ))}
    </div>
  );
}

export default Shows;
