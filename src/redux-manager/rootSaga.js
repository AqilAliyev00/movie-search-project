import { all, call } from "redux-saga/effects";
import movieSaga from "./Movies/saga";
import favoritesSaga from "./Favorites/saga";

function* rootSaga() {
  yield all([call(movieSaga), call(favoritesSaga)]);
}

export default rootSaga;
