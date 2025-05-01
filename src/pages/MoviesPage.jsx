import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router';
import { getFilmByquery } from '../search';
import { useDebounce } from 'use-debounce';
import MovieList from '../components/MovieList/MovieList'

const MoviesPage = () => {

const [films, setFilms] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(false);


  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [debouncedQuery] = useDebounce(query, 300);


  const changeSearchText = (event) => {
    const nextParams = new URLSearchParams(searchParams);

    if (event.target.value !== '') {
      nextParams.set('query', event.target.value);
    } else {
      nextParams.delete('query');
    }

    setSearchParams(nextParams);
  };

  useEffect(() => {
    async function getFilms() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await getFilmByquery(debouncedQuery);
        setFilms(data.results);
      } catch {
        setError(true);
      } finally{
        setIsLoading(false);
      }
    }

    getFilms();
  }, [debouncedQuery]);


  return (
    <div>
      <input type='text' value={query} onChange={changeSearchText}></input>
      {isLoading && <b>Loading films...</b>}
      {error && <b>Whoops there was an error, plz reload the page...</b>}
      {films.length>0 && <MovieList films={films}/>}
    </div>
  )
}

export default MoviesPage