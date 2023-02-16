const URL = 'https://api.tvmaze.com/people';

export default async function getPeople() {
  const respuesta = await fetch(`${URL}1`);
  const personas = await respuesta.json();
  return personas;
}
