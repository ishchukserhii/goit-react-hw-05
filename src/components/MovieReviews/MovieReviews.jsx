import React, { useEffect, useState } from 'react'
import { getReviewsById } from '../../search';
import { useParams } from 'react-router';

const MovieReviews = () => {

const { movieId } = useParams();
const [response, setResponse] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const data = await getReviewsById(movieId);
        setResponse(data);
      } catch {
        console.error("Помилка під час отримання даних:", error);
      }
    }
    getData();
  }, [movieId]);

console.log(response)

  return (
    response && (
      <ul>
      {response.results.map((Reviews) => (
        <li key={Reviews.id}>
        <h2>Reviews</h2>
        <p>{Reviews.author}</p>
        <p>{Reviews.content}</p>
      </li>))}
      </ul>
    )
  );
}

export default MovieReviews