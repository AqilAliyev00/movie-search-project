import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllFilms } from "../../redux-manager/ListPage/selectors";
import { getFavoritFilmsIdAction } from "../../redux-manager/ListPage/actions";
import "./ListPage.css";

const ListPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavoritFilmsIdAction());
  }, []);

  const movies = useSelector(getAllFilms);

  return (
    <div className="list-page">
      <h1 className="list-page__title">Мой список</h1>
      <ul>
        {movies.map((item) => {
          return (
            <li key={item.imdbID}>
              <a
                href={`https://www.imdb.com/title/${item.imdbID}/`}
                target="_blank"
              >
                {item.Title} ({item.Year})
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListPage;
