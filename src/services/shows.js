const URL = 'https://api.tvmaze.com/shows';
const URL1 = 'https://api.tvmaze.com/search/shows';

export default async function getShows() {
  const respuesta = await fetch(`${URL}`);
  const series = await respuesta.json();
  return series;
}

export async function getShow(id) {
  const respuesta = await fetch(`${URL}/${id}`);
  const show = await respuesta.json();
  return show;
}

export async function getShowByName(name) {
  const respuesta = await fetch(`${URL1}?q=${name}`);
  const show = await respuesta.json();
  return show;
}
