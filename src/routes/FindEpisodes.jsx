import React from 'react';
import {
  useLoaderData,
} from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import { getSingleEpisode } from '../services/episodes';

export async function loader({ params }) {
  const episode = await getSingleEpisode(params.episodeId);
  if (!episode) {
    throw new Response('', {
      status: 404,
      statusText: 'Not Found',
    });
  }
  return episode;
}

export default function FindEpisode() {
  const episode = useLoaderData();

  return (
    <div id="show">
      <div className="row">
        <div className="col-md-6">
          <img
            key={episode.id}
            src={episode.image.medium || null}
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
                    <td>{episode.name}</td>
                  </tr>
                  <tr>
                    <td>Temporada</td>
                    <td>{episode.season}</td>
                  </tr>
                  <tr>
                    <td>Episodio</td>
                    <td>{episode.number}</td>
                  </tr>
                  <tr>
                    <td>Valoracion</td>
                    <td>{episode.rating.average}</td>
                  </tr>
                </tbody>
              </Table>
            </Tab>
            <Tab eventKey="resumen" title="Resumen">
              {episode.summary}
            </Tab>
          </Tabs>

        </div>
      </div>
    </div>
  );
}
