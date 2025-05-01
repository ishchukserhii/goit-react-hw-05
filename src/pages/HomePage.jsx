import React, { useEffect, useState } from 'react'
import MovieList from '../components/MovieList/MovieList';
import { Api } from '../search';

const HomePage = () => {
  const[response, setResponse] = useState([])
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(false);


  useEffect(() => {
    async function getData() {
      try{
        setIsLoading(true);
        setError(false);
const data = await Api()
setResponse(data.results)
      }
      catch{
        setError(true);
      }
      finally{
        setIsLoading(false);
      }
    }
    getData()
  },[])



  return (
    <>
    <h2>Trending today</h2>
<MovieList films={response}/>
{isLoading && <b>Loading users...</b>}
{error && <b>Whoops there was an error, plz reload the page...</b>}
</>
  )
}

export default HomePage