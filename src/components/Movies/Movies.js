import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import MovieItem from "../MovieItem/MovieItem";
import { getMovieListSelector } from "../../redux-manager/Movies/selectors";
import "./Movies.css";

const Movies = () => {
  const [movies, setMovies] = useState();
  const movieList = useSelector(getMovieListSelector);
  useEffect(() => {
    setMovies(movieList);
  }, [movieList]);
  return (
    <ul className="movies">
      {movies &&
        movies.map((movie) => (
          <li className="movies__item" key={movie.imdbID}>
            <MovieItem {...movie} />
          </li>
        ))}
    </ul>
  );
};

export default Movies;
