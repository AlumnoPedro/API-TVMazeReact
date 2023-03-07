const URL = 'https://api.tvmaze.com/people';
const URL1 = 'https://api.tvmaze.com/search/people';

export default async function getPeople() {
  const respuesta = await fetch(`${URL}`);
  const personas = await respuesta.json();
  return personas;
}

export async function getPerson(id) {
  const respuesta = await fetch(`${URL}/${id}`);
  const person = await respuesta.json();
  return person;
}

export async function getPeopleByName(name) {
  const respuesta = await fetch(`${URL1}?q=${name}`);
  const show = await respuesta.json();
  return show;
}
