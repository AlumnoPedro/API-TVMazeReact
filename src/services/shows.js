const URL = 'https://api.tvmaze.com/shows/';

export default async function getShows() {
  const respuesta = await fetch(`${URL}1`);
  const peliculas = await respuesta.json();
  return peliculas;
}
