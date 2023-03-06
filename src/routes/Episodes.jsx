import {
  NavLink, useLoaderData,
} from 'react-router-dom';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import getEpisodes from '../services/episodes';
import '../style.css';
import Pagination from '../components/Pagination';

export async function loader({ params }) {
  const episodes = await getEpisodes(params.showId);
  if (!episodes) {
    throw new Response('', {
      status: 404,
      statusText: 'Not Found',
    });
  }
  return episodes;
}

export default function FindShow() {
  const episodes = useLoaderData();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = episodes.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="contenedor">
      <div className="row">
        {currentPosts.map((episode) => (
          <Card className="carta" key={episode.id}>
            <NavLink
              to={`/episodes/${episode.id}`}
            >
              <Card.Img className="imagen" variant="top" src={episode.image ? episode.image.original : 'src\\img\\no-image.jpg'} />
              <Card.Body>
                <Card.Title className="texto-carta">{episode.name}</Card.Title>
              </Card.Body>
            </NavLink>
          </Card>
        ))}
      </div>
      <Pagination
        totalPosts={episodes.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
      />

    </div>
  );
}
