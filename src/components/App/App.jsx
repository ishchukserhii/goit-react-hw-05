
import { Route, Routes } from 'react-router';

import Header from "../Header/Header"
import HomePage from "../../pages/HomePage"
import MoviesPage from "../../pages/MoviesPage"
import MovieDetailsPage from "../../pages/MovieDetailsPage"
import MovieCast from "../MovieCast/MovieCast"
import MovieReviews from "../MovieReviews/MovieReviews"
import NotFoundPage from "../../pages/NotFoundPage"



function App() {
  return (
<div>
<Header/>

<Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

</div>
  )
}

export default App
