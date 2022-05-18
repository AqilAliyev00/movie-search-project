import { ADD_MOVIE } from "../constants";

const initialValues = {
  favoriteMovies: [],
};

const favoritesReducer = (state = initialValues, action) => {
  const isElementExist = state.favoriteMovies.some(
    (el) => el?.imdbID === action.payload?.imdbID
  );
  switch (action.type) {
    case ADD_MOVIE:
      if (isElementExist) return state;
      return {
        ...state,
        favoriteMovies: [...state.favoriteMovies, action.payload],
      };
    default:
      return state;
  }
};

export default favoritesReducer;
