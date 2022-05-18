import { all, call } from "redux-saga/effects";
import movieSaga from "./Movies/saga";

function* rootSaga() {
  yield all([call(movieSaga)]);
}

export default rootSaga;
