import { GET_MOVIE,SET_MOVIE } from "../constants";

export const getMovieListAction = (search) => ({
  type: GET_MOVIE,
  payload: search,
});

export const setMovieListAction = (movie) => ({
  type: SET_MOVIE,
  payload: movie,
});
