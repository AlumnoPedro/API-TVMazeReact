import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import getPeople from '../services/people';
import '../style.css';
import SearchBox from '../components/SearchBox';

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
      <nav className="navbar navbar-expand-sm navbar-light bg-light w-100">
        <a className="navbar-brand" href="main.jsx">Navbar</a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <a className="dropdown-item" href="#">Action 1</a>
                <a className="dropdown-item" href="#">Action 2</a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <SearchBox
              placeholder="Búsqueda People"
              onSearchChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      <h1 className="text-center">Listado People</h1>
      {filterPeople.map((person) => (
        <div key={person.id} className="row">
          <div className="col-md-6">
            <ul className="lista text-center">
              <li className="li__body">{person.name}</li>
            </ul>
          </div>
          {/* <div className="col-md-6">
            <div className="cards">
              <img src={show.image != null ? show.image.original : './img/no-image.jpg'} alt="" />
              <div className="card-body">
                <h4 className="card-title">
                  Nombre:
                  {show.name}
                </h4>
                <a href="./episodios.html?id={show.id}"><h5 className="card-title">Ver</h5></a>
              </div>
            </div>
          </div> */}
        </div>
      ))}
    </div>
  );
}

export default People;
