import {
  NavLink,
} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import {
  getPeople,
}
  from '../services/people';
import '../style.css';
import SearchBox from '../components/SearchBox';
import Footer from '../components/Footer';
import Pagination from '../components/Pagination';

function People() {
  const [search, setSearch] = useState('');
  const [people, setPeople] = useState([]);
  useEffect(() => {
    getPeople().then((personas) => setPeople(personas));
  }, []);
  const filterPeople = people.filter((person) => person.name.toLowerCase()
    .includes(search.toLowerCase()));
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = filterPeople.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="contenedor">
      <h1 className="text-center">Listado People</h1>
      <SearchBox
        className="buscador"
        placeholder="Búsqueda People"
        onSearchChange={(e) => setSearch(e.target.value)}
      />
      <div className="row">
        {currentPosts.map((person) => (
          <Card className="carta" key={person.id}>
            <NavLink
              to={`${person.id}`}
            >
              <Card.Img className="imagen" variant="top" src={person.image ? person.image.original : 'src\\img\\no-image.jpg'} />
              <Card.Body>
                <Card.Title className="texto-carta">{person.name}</Card.Title>
              </Card.Body>
            </NavLink>
          </Card>
        ))}
      </div>
      <Pagination
        totalPosts={filterPeople.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
      />
      <Footer />
    </div>
  );
}

export default People;
