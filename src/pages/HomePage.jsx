import React from 'react'
import { useEffect, useState } from 'react'
import { Api } from "../search";
import { Link } from 'react-router';

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


    <div>
      <h2>Trending today</h2>
      
      <ul >
    {response.map((film)=> (

        <li key={film.id} >
          <Link to={`/movies/${film.id}`} >{film.title}</Link>
          </li>))}
</ul></div>
  )
}

export default HomePage