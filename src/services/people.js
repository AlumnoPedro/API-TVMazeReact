const URL = 'https://api.tvmaze.com/people/';

export default async function getPeople() {
  const respuesta = await fetch(`${URL}1`);
  const peliculas = await respuesta.json();
  return peliculas;
}
