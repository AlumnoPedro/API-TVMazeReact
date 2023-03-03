import React from 'react';
import {
  useLoaderData, NavLink,
} from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
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
    <div className="contenedor">
      <div id="show">
        <div className="row">
          <div className="col-md-6">
            <img
              key={show.id}
              src={show.image.medium || null}
              alt=""
            />
          </div>
          <div className="col-md-6">
            <Tabs
              defaultActiveKey="info"
              id="justify-tab-example"
              className="mb-3"
              justify
            >
              <Tab eventKey="info" title="Informacion">
                <Table striped bordered hover>
                  <tbody>
                    <tr>
                      <td>Nombre</td>
                      <td>{show.name}</td>
                    </tr>
                    <tr>
                      <td>Idioma</td>
                      <td>{show.language}</td>
                    </tr>
                    <tr>
                      <td>Genero</td>
                      <td>{show.genres}</td>
                    </tr>
                    <tr>
                      <td>Estado</td>
                      <td>{show.status}</td>
                    </tr>
                  </tbody>
                </Table>
              </Tab>
              <Tab eventKey="resumen" title="Resumen">
                <div dangerouslySetInnerHTML={{ __html: show.summary }} />
              </Tab>
              <Tab eventKey="episodios" title="Episodios">
                <NavLink
                  to="episodes"
                >
                  <Button variant="primary">Episodios</Button>
                </NavLink>
              </Tab>
            </Tabs>

          </div>
        </div>
      </div>
    </div>
  );
}
