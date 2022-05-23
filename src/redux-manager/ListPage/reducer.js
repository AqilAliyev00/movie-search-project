import { SAVE_ALL_MOVIES, SAVE_MOVIE_ID } from "../constants";

const initialValues = {
  movieInfo: [],
  favoritListId: null,
};

const listPageReducer = (state = initialValues, action) => {
  switch (action.type) {
    case SAVE_MOVIE_ID:
      return {
        ...state,
        favoritListId: action.payload,
      };
    case SAVE_ALL_MOVIES:
      return {
        ...state,
        movieInfo: action.payload,
      };
    default:
      return state;
  }
};

export default listPageReducer;
