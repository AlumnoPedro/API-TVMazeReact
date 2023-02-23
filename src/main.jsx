import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import People from './routes/People';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <People />,
    children: [
      { index: true, element: <People /> },
      {
        path: 'people/personId',
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
