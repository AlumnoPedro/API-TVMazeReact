const URL = 'https://api.tvmaze.com/people';

export default async function getPeople() {
  const respuesta = await fetch(`${URL}`);
  const personas = await respuesta.json();
  return personas;
}
