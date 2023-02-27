import React from 'react';
import {
  useLoaderData,
} from 'react-router-dom';
import { getPerson } from '../services/people';

export async function loader({ params }) {
  const person = await getPerson(params.peopleId);
  if (!person) {
    throw new Response('', {
      status: 404,
      statusText: 'Not Found',
    });
  }
  return person;
}

export default function FindPeople() {
  const person = useLoaderData();

  return (
    <div id="contact">
      <div className="row">
        <div className="col-md-6">
          <img
            key={person.id}
            src={person.image.medium || null}
          />
        </div>
        <div className="col-md-6">
          <h3 className="text-center"><strong>Información</strong></h3>
          <ul>
            <li className="my-4">{person.name}</li>
            <li className="my-4">{person.country.name}</li>
            <li className="my-4">{person.gender}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
