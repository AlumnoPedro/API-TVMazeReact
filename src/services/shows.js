const URL = 'https://api.tvmaze.com/shows';

export default async function getShows() {
  const respuesta = await fetch(`${URL}`);
  const peliculas = await respuesta.json();
  return peliculas;
}

export async function getShow(id) {
  const respuesta = await fetch(`${URL}/${id}`);
  const show = await respuesta.json();
  return show;
}
