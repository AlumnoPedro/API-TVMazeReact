import {
    useLoaderData,
  } from "react-router-dom";
  import { getPerson } from "../services/people";
    
  export async function loader({ params }) {
    const person = await getPerson(params.peopleId);
    if (!person) {
      throw new Response('', {
        status: 404,
        statusText: 'Not Found',
      });
    }
    return person;
  }
  
  export default function FindPeople() {
    const person = useLoaderData();
  
    return (
      <div id="contact">
        <div>
          <img
            key={person.id}
            src={person.image.original || null}
          />
        </div>
      </div>
    );
  }
