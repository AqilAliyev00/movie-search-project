import React, { useState } from "react";
import "./Favorites.css";
import { useSelector } from "react-redux";
import { addMovieList } from "../../redux-manager/Favorites/selectors";
import { useDispatch } from "react-redux";
import { deleteMovieListAction } from "../../redux-manager/Favorites/actions";

const Favorites = () => {
  const [title, setTitle] = useState("");

  const movies = useSelector(addMovieList);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const dispatch = useDispatch();

  const deleteBtn = (e) => {
    dispatch(deleteMovieListAction(e.target.id));
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
              <li key={item.imdbID} className="favorite__list">
                {item.Title} ({item.Year})
                <button onClick={deleteBtn} id={item.imdbID}>
                  &#10006;
                </button>
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
