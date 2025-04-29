import React, { useEffect, useState } from 'react'
import { getCastById } from '../../search';
import { useParams } from 'react-router';

const MovieCast = () => {

const { movieId } = useParams();
const [response, setResponse] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const data = await getCastById(movieId);
        setResponse(data);
      } catch {
        console.error("Помилка під час отримання даних:", error);
      }
    }
    getData();
  }, [movieId]);



  return (
    response && (
      <ul>
        {response.cast.map((actor) => (
          <li key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
              }
              alt={actor.name}
              width="100"
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    )
  );
}

export default MovieCast