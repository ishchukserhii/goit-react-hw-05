import axios from 'axios';





export const Api = async () => {
    const url = 'https://api.themoviedb.org/3/trending/movie/week?language=en-US';

    const options = {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjMzMzFlMTIzMDM5MWI0ZjYxOWI4N2NjYWM5ODgzNSIsIm5iZiI6MTc0NTYwMzQ1MS4zNjgsInN1YiI6IjY4MGJjYjdiNWNlYTZkYWE4YzlkMWZkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V15U-8p9YHRa3dsSXeXbID8FLa5TI0efW0vbiQnR_JE'
      }
    };


    const response = await axios.get(url,options);

    return response.data;
};


export const getFilmById = async (movie_id) => {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}`;

  const options = {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjMzMzFlMTIzMDM5MWI0ZjYxOWI4N2NjYWM5ODgzNSIsIm5iZiI6MTc0NTYwMzQ1MS4zNjgsInN1YiI6IjY4MGJjYjdiNWNlYTZkYWE4YzlkMWZkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V15U-8p9YHRa3dsSXeXbID8FLa5TI0efW0vbiQnR_JE'
    }
  };


  const response = await axios.get(url,options);

  return response.data;
};


export const getCastById = async (movie_id) => {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}/credits`;

  const options = {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjMzMzFlMTIzMDM5MWI0ZjYxOWI4N2NjYWM5ODgzNSIsIm5iZiI6MTc0NTYwMzQ1MS4zNjgsInN1YiI6IjY4MGJjYjdiNWNlYTZkYWE4YzlkMWZkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V15U-8p9YHRa3dsSXeXbID8FLa5TI0efW0vbiQnR_JE'
    }
  };


  const response = await axios.get(url,options);

  return response.data;
};

export const getReviewsById = async (movie_id) => {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}/reviews`;

  const options = {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjMzMzFlMTIzMDM5MWI0ZjYxOWI4N2NjYWM5ODgzNSIsIm5iZiI6MTc0NTYwMzQ1MS4zNjgsInN1YiI6IjY4MGJjYjdiNWNlYTZkYWE4YzlkMWZkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V15U-8p9YHRa3dsSXeXbID8FLa5TI0efW0vbiQnR_JE'
    }
  };


  const response = await axios.get(url,options);

  return response.data;
};

export const getFilmByquery = async (query) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}`;

  const options = {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjMzMzFlMTIzMDM5MWI0ZjYxOWI4N2NjYWM5ODgzNSIsIm5iZiI6MTc0NTYwMzQ1MS4zNjgsInN1YiI6IjY4MGJjYjdiNWNlYTZkYWE4YzlkMWZkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V15U-8p9YHRa3dsSXeXbID8FLa5TI0efW0vbiQnR_JE'
    }
  };


  const response = await axios.get(url,options);

  return response.data;
};