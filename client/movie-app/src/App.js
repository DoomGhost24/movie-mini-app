import "./App.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  Link,
  useParams,
} from "react-router-dom";
import Movies from "./moviesComponent";

const App = () => {
  const url = "http://localhost:3000/movies";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setMovies(json))
      .catch((err) => console.log(err));
  }, []);

  const MoviesCard = () => {
    if (movies.length > 0) {
      return movies.map((movie, index) => (
        <div>
          <li key={index}>{movie.title}</li>
        </div>
      ));
    }
    return (
      <>
        <Router>
          <MoviesCard />
          <Routes>
            <Route path="/movies" element={<Movies />} />
          </Routes>
        </Router>
      </>
    );
  };
};
export default App;

// const movies = [
//   {title: 'Mean Girls'},
//   {title: 'Hackers'},
//   {title: 'The Grey'},
//   {title: 'Sunshine'},
//   {title: 'Ex Machina'},
// ];
