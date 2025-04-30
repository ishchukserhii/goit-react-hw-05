import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router";
import { getFilmById } from "../search";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation()
const backLink = useRef(location.state)

  const [response, setResponse] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const data = await getFilmById(movieId);
        setResponse(data);
      } catch {
        console.error("Помилка під час отримання даних:", error);
      }
    }
    getData();
  }, [movieId]);






  return (
    <>
    <Link to={backLink.current || "/movies"} className="link-back">← Go back</Link>
      {response && (
        <div className="movie-details-container">
          <div className="movie-poster">
            <img
              src={`https://image.tmdb.org/t/p/w500${response.poster_path}`}
              alt={response.title}
            />
          </div>
          <div className="movie-details">
            <h1 className="movie-title">{response.title} </h1>
            <p className="score">{`User score: ${Math.round(
              response.vote_average * 10
            )}`}</p>
            <h2 className="overview-title">Overview</h2>
            <p className="overview-text">{response.overview}</p>
            <h2 className="genres-title">Genres</h2>

            <ul className="genres-list">
              {response.genres.map((ganres) => (
                <li key={ganres.id}>{ganres.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Additional information.</h3>
            <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetailsPage;
