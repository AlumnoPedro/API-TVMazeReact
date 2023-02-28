import {
  NavLink,
} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import getShows from '../services/shows';
import '../style.css';
import SearchBox from '../components/SearchBox';

function Shows() {
  const [search, setSearch] = useState('');
  const [shows, setShows] = useState([]);
  useEffect(() => {
    getShows().then((series) => setShows(series));
  }, []);
  const filterShow = shows.filter((show) => show.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <div>
      <SearchBox
        placeholder="Búsqueda People"
        onSearchChange={(e) => setSearch(e.target.value)}
      />
      <h1 className="text-center">Listado Shows</h1>
      <div className="row">
        {filterShow.map((show) => (
          <Card className="carta" key={show.id}>
            <NavLink
              to={`${show.id}`}
            >
              <Card.Img className="imagen" variant="top" src={show.image ? show.image.original : 'src\\img\\no-image.jpg'} />
              <Card.Body>
                <Card.Title className="texto-carta">{show.name}</Card.Title>
              </Card.Body>
            </NavLink>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Shows;
