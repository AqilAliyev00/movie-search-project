import { takeEvery, put, call, select } from "redux-saga/effects";
import { GET_MOVIE } from "../constants";
import { setMovieListAction } from "./actions";
import { getMovieListSelector } from "./selectors";
import { fetchMovieList } from "../REST";

function* workerMovies(action) {
  try {
    const data = yield call(fetchMovieList, action.payload);
    console.log(data.Search);
    yield put(setMovieListAction(data.Search));
    yield select(getMovieListSelector);
  } catch (err) {
    console.error("ERROR", err);
  }
}

export default function* watcherMovies() {
  yield takeEvery(GET_MOVIE, workerMovies);
}
