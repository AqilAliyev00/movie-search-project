import { GET_MOVIE_ID, SAVE_ALL_MOVIES } from "../constants";

export const getFavoritFilmsIdAction = () => ({
  type: GET_MOVIE_ID,
});

export const saveAllFavoritFilmsAction = (arr) => ({
  type: SAVE_ALL_MOVIES,
  payload: arr,
});
