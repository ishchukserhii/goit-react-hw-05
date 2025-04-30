import React, { useEffect, useState } from 'react'
import MovieList from '../components/MovieList/MovieList';
import { Api } from '../search';

const HomePage = () => {
  const[response, setResponse] = useState([])

  useEffect(() => {
    async function getData() {
      try{
const data = await Api()
setResponse(data.results)
      }
      catch{
        console.error("Помилка під час отримання даних:", error);
      }
    }
    getData()
  },[])



  return (
    <>
    <h2>Trending today</h2>
<MovieList films={response}/>
</>
  )
}

export default HomePage