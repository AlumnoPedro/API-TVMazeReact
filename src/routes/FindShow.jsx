import React from 'react';
import {
  useLoaderData,
} from 'react-router-dom';
import { getShow } from '../services/shows';

export async function loader({ params }) {
  const show = await getShow(params.showId);
  if (!show) {
    throw new Response('', {
      status: 404,
      statusText: 'Not Found',
    });
  }
  return show;
}

export default function FindShow() {
  const show = useLoaderData();

  return (
    <div id="show">
      <div className="row">
        <div className="col-md-6">
          <img
            key={show.id}
            src={show.image.medium || null}
          />
        </div>
        <div className="col-md-6">
          <h3 className="text-center"><strong>Información</strong></h3>
          <ul>
            <li className="my-4">{show.language}</li>
            <li className="my-4">{show.rating.average}</li>
            <li className="my-4">{show.summary}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
