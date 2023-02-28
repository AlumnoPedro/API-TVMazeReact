import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
// Importamos desde las rutas del proyecto todas las funciones sobre los contactos
import './index.css';
import ErrorPage from './error-page';
import People from './routes/People';
import FindPeople, {
  loader as peopleLoader,
} from './routes/FindPeople';
import Shows from './routes/Shows';
import FindShow, {
  loader as showLoader,
} from './routes/FindShow';
import Episodes, {
  loader as episodeLoader,
} from './routes/Episodes';
import FindEpisode, {
  loader as findEpisodeLoader,
} from './routes/FindEpisodes';

import Root from './routes/Root';

// Declaramos el router
const router = createBrowserRouter([
  {
    // Indicamos la ruta que añadimos a la URL
    path: '/',
    // Indicamos su nombre de elemento que importamos de /routes/Root.jsx
    element: <Root />,
    // Indicamos su elemento Error que importamos de /error-page.jsx
    errorElement: <ErrorPage />,
    // Agregamos la lista de sus elementos hijos en un array
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          // Cada uno de sus hijos tendrá una ruta, el nombre de su elemento,
          // su cargador (Loader) y definimos su accion (Action).
          {
            path: 'people',
            element: <People />,
          },
          {
            path: 'people/:peopleId',
            element: <FindPeople />,
            loader: peopleLoader,
          },
          {
            path: 'shows',
            element: <Shows />,
          },
          {
            path: 'shows/:showId',
            element: <FindShow />,
            loader: showLoader,
          },
          {
            path: 'shows/:showId/episodes',
            element: <Episodes />,
            loader: episodeLoader,
          },
          {
            path: 'episodes/:episodeId',
            element: <FindEpisode />,
            loader: findEpisodeLoader,
          },
        ],
      },
    ],
  },
]);
// Renderizamos el router en modo escricto
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
