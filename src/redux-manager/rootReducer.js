import { combineReducers } from "redux";
import movieReducer from "./Movies/reducer";
import favoritesReducer from "./Favorites/reducer";

const rootReducer = combineReducers({ movieReducer, favoritesReducer });

export default rootReducer;
