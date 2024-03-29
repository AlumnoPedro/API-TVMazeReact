import {
  NavLink,
} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import getShows, { getShowByName } from '../services/shows';
import '../style.css';
import SearchBox from '../components/SearchBox';
import Footer from '../components/Footer';
import Pagination from '../components/Pagination';

function Shows() {
  const [search, setSearch] = useState('');
  const [shows, setShows] = useState([]);
  useEffect(() => {
    getShows().then((series) => setShows(series));
  }, []);
  useEffect(() => {
    getShows().then((series) => setShows(series));
  }, [search === '']);
  useEffect(() => {
    getShowByName(search)
      .then((series) => series.map((show) => show.show))
      .then((series) => setShows(series));
  }, [search]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(16);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = shows.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="contenedor">
      <h1 className="text-center">Listado Shows</h1>
      <SearchBox
        placeholder="Búsqueda Shows"
        onSearchChange={(e) => setSearch(e.target.value)}
      />
      <div className="row">
        {currentPosts.map((show) => (
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
      <Pagination
        totalPosts={shows.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
      />
      <Footer />
    </div>
  );
}

export default Shows;
