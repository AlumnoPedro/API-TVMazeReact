import React from 'react';
import {
  useLoaderData,
} from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
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
    <div id="contenedor">
      <div id="contact">
        <div className="row">
          <div className="col-md-6">
            <img
              key={person.id}
              src={person.image.medium || null}
              alt=""
            />
          </div>
          <div className="col-md-6">
            <Tabs
              defaultActiveKey="perfil"
              id="justify-tab-example"
              className="mb-3"
              justify
            >
              <Tab eventKey="perfil" title="Perfil">
                <Table striped bordered hover>
                  <tbody>
                    <tr>
                      <td>Nombre</td>
                      <td>{person.name}</td>
                    </tr>
                    <tr>
                      <td>Genero</td>
                      <td>{person.gender}</td>
                    </tr>
                    <tr>
                      <td>Pais</td>
                      <td>{person.country.name}</td>
                    </tr>
                    <tr>
                      <td>Fecha de Nacimiento</td>
                      <td>{person.birthday}</td>
                    </tr>
                  </tbody>
                </Table>
              </Tab>
              <Tab eventKey="profile" title="Mas Informacion">
                asdf
              </Tab>

            </Tabs>

          </div>
        </div>
      </div>
    </div>
  );
}
