import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { saveMovieList } from "../../redux-manager/Favorites/selectors";
import "./ListPage.css";

const ListPage = () => {
  const [movies, setMovies] = useState([
    // {
    //   title: "The Godfather",
    //   year: 1972,
    //   imdbID: "tt0068646",
    // },
  ]);

  const params = useParams();

  const saveMovies = useSelector(saveMovieList);

  useEffect(() => {
    console.log(params?.id);
    setMovies(saveMovies);
    console.log(saveMovies);

    // TODO: запрос к сервер на получение списка
    // TODO: запросы к серверу по всем imdbID
  });

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
