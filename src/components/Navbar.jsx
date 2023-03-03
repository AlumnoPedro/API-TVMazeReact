import React from 'react';
import {
  NavLink,
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import '../style.css';

function BarraNavegacion() {
  return (
    <Navbar bg="dark" fixed="top" expand="lg">
      <Container>
        <img
          alt=""
          src="/src/img/tvm-header-logo.png"
          className="d-inline-block align-top"
        />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto listaBotones">
            <NavLink
              to="/"
            >
              <Button variant="outline-primary" className="boton">Inicio</Button>
            </NavLink>
            <NavLink
              to="/shows"
            >
              <Button variant="outline-primary" className="boton">Shows</Button>
            </NavLink>
            <NavLink
              to="/people"
            >
              <Button variant="outline-primary" className="boton">People</Button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BarraNavegacion;
