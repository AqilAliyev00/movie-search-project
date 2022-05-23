import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllMovies } from "../../redux-manager/ListPage/selectors";
import { getMoviesIdAction } from "../../redux-manager/ListPage/actions";
import "./ListPage.css";

const ListPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesIdAction());
  }, []);

  const movies = useSelector(getAllMovies);

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
