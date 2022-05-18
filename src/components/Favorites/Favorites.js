import React, { useState, useEffect } from "react";
import "./Favorites.css";
import { useSelector } from "react-redux";
import { addMovieList } from "../../redux-manager/Favorites/selectors";

const Favorites = () => {
  const [title, setTitle] = useState("");

  const movies = useSelector(addMovieList);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const deleteBtn = () => {
    // setMovies(addMoviesList);
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
              <div className="favorite__list">
                <li key={item.imdbID}>
                  {item.Title} ({item.Year})
                </li>
                <button onClick={deleteBtn}>&#10006;</button>
              </div>
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
