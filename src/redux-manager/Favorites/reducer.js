import { ADD_MOVIE } from "../constants";

const initialValues = {
  favoriteMovies: [],
};

const favoritesReducer = (state = initialValues, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        favoriteMovies: [...state.favoriteMovies, action.payload],
      };
    default:
      return state;
  }
};

export default favoritesReducer;
