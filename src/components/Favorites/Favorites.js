import React, { useState } from "react";
import "./Favorites.css";
import { useSelector } from "react-redux";
import { addMovieList } from "../../redux-manager/Favorites/selectors";
import { useDispatch } from "react-redux";
import { deleteMovieListAction } from "../../redux-manager/Favorites/actions";
import { Link } from "react-router-dom";

const Favorites = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState(true);
  const [click, setClick] = useState(false);

  const movies = useSelector(addMovieList);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
    e.target.value !== "" && movies[0] ? setType(false) : setType(true);
  };

  const dispatch = useDispatch();

  const deleteBtn = (e) => {
    dispatch(deleteMovieListAction(e.target.id));
  };

  const saveBtn = () => {
    setClick(true);
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

      {click ? (
        <Link to="/list/:id">Перейти к списку</Link>
      ) : (
        <button
          type="button"
          className="favorites__save"
          disabled={type}
          onClick={saveBtn}
        >
          Сохранить список
        </button>
      )}
    </div>
  );
};

export default Favorites;
