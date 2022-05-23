import { takeEvery, put, call } from "redux-saga/effects";
import { SAVE_MOVIE } from "../constants";
import { saveMovieListIdAction } from "./actions";
import { saveFetchMovieList } from "../REST";

function* workerMovies(action) {
  try {
    const data = yield call(saveFetchMovieList, action.payload);

    yield put(saveMovieListIdAction(data.id));
  } catch (err) {
    console.error("ERROR", err);
  }
}

export default function* watcherMovies() {
  yield takeEvery(SAVE_MOVIE, workerMovies);
}
