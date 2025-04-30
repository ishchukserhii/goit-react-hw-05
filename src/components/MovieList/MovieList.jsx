import React from 'react'
import { Link, useLocation } from 'react-router';


const MovieList = ({films}) => {
const location = useLocation()

    
  return (
    <div>
    <ul >
  {films.map((film)=> (

      <li key={film.id} >
        <Link to={`/movies/${film.id}`} state={location}>{film.title}</Link>
        </li>))}
    </ul>
    </div>
  )
}

export default MovieList