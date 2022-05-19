import { ADD_MOVIE, DELETE_MOVIE } from "../constants";

export const addMovieListAction = (payload) => ({ type: ADD_MOVIE, payload });
export const deleteMovieListAction = (payload) => ({
  type: DELETE_MOVIE,
  payload,
});
