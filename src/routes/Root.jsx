import { Outlet, Link } from 'react-router-dom';
import React from 'react';

function Root() {
  return (
    <>
      <nav>
        <ul className="lista">
          <li className="li__body">
            <Link to="/">Home</Link>
          </li>
          <li className="li__body">
            <Link to="/shows">Shows</Link>
          </li>
          <li className="li__body">
            <Link to="/people">People</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default Root;
