import { Outlet, Link } from 'react-router-dom';
import React from 'react';
import '../index.css';
import '../style.css';

function Root() {
  return (
    <>
      <nav>
        <ul className="listaraiz">
          <li>
            <img src="src\img\tvm-header-logo.png" alt="" />
          </li>
          <li className="li__raiz">
            <Link to="/">Home</Link>
          </li>
          <li className="li__raiz">
            <Link to="/shows">Shows</Link>
          </li>
          <li className="li__raiz">
            <Link to="/people">People</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default Root;
