import { GET_MOVIE_ID, SAVE_ALL_MOVIES } from "../constants";

export const getMoviesIdAction = () => ({
  type: GET_MOVIE_ID,
});

export const saveAllMoviesAction = (arr) => ({
  type: SAVE_ALL_MOVIES,
  payload: arr,
});
