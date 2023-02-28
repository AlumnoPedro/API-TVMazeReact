const URL = 'https://api.tvmaze.com/shows';
const URL1 = 'https://api.tvmaze.com/episodes';

export default async function getEpisodes(id) {
  const respuesta = await fetch(`${URL}/${id}/episodes`);
  const show = await respuesta.json();
  return show;
}

export async function getSingleEpisode(id) {
  const respuesta = await fetch(`${URL1}/${id}`);
  const show = await respuesta.json();
  return show;
}
