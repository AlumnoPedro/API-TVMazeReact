import {
    useLoaderData,
  } from "react-router-dom";
  import { getShow } from "../services/shows";
    
  export async function loader({ params }) {
    const show = await getShow(params.showId);
    if (!show) {
      throw new Response('', {
        status: 404,
        statusText: 'Not Found',
      });
    }
    return show;
  }
  
  export default function FindShow() {
    const show = useLoaderData();
  
    return (
      <div id="show">
        <div>
          <img
            key={show.id}
            src={show.image.original || null}
          />
        </div>
      </div>
    );
  }
