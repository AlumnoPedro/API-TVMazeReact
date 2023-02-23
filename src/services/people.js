const URL = 'https://api.tvmaze.com/people';

export async function getPeople() {
  const respuesta = await fetch(`${URL}`);
  const personas = await respuesta.json();
  return personas;
}

export async function getPerson(id) {
  const respuesta = await fetch(`${URL}/${id}`);
  const person = await respuesta.json();
  return person;
}
