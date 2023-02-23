import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/*
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
*/
import People from './routes/People';
import './index.css';
import Root from './routes/Root';
import Shows from './routes/Shows';
import ErrorPage from './error-page';
import Home from './routes/Home';
/*
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <People /> },
      {
        path: 'people/personId',
      },
    ],
  },
]);
*/
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="people" element={<People />} />
          <Route path="shows" element={<Shows />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
/*
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
*/
