import { combineReducers } from "redux";
import movieReducer from "./Movies/reducer";

const rootReducer = combineReducers({ movieReducer });

export default rootReducer;
