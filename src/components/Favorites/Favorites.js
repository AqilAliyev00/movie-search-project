import React, { useState, useEffect } from "react";
import "./Favorites.css";
import { useSelector } from "react-redux";
import { addMovieList } from "../../redux-manager/Favorites/selectors";

const Favorites = () => {
  const [title, setTitle] = useState("");
  const [movies, setMovies] = useState();

  const addMoviesList = useSelector(addMovieList);

  useEffect(() => {
    setMovies(addMoviesList);
    console.log(addMoviesList);
  }, [addMoviesList]);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  return (
    <div className="favorites">
      <input
        placeholder="Новый список"
        onChange={onChangeTitle}
        value={title}
        className="favorites__name"
      />
      <ul className="favorites__list">
        {movies &&
          movies.map((item) => {
            return (
              <li key={item.imdbID}>
                {item.Title} ({item.Year})
              </li>
            );
          })}
      </ul>
      <button type="button" className="favorites__save">
        Сохранить список
      </button>
    </div>
  );
};

export default Favorites;
