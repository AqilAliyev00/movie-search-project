import { SET_MOVIE } from "../constants";

const initialValues = {
  movieList: [],
};

const movieReducer = (state = initialValues, action) => {
  switch (action.type) {
    case SET_MOVIE:
      console.log("redux");
      return { ...state, movieList: action.payload };
    // case DELETE_GOOD:
    //   return {
    //     ...state,
    //     cartGoods: state.cartGoods.filter((good) => good.id !== action.payload),
    //   };
    default:
      return state;
  }
};

export default movieReducer;
