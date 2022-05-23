import { takeEvery, put, call, select } from "redux-saga/effects";
import { GET_MOVIE_ID } from "../constants";
import { saveAllMoviesAction } from "./actions";
import { getFavoritmovieId, getMoviesInfo } from "../REST";
import { getMoviesListId } from "./selectors";

function* workerFavoritmovieId() {
  try {
    const MoviesListId = yield select(getMoviesListId);
    const movieId = yield call(getFavoritmovieId, MoviesListId);
    const allMoviesInfo = [];

    for (let i = 0; i < movieId.movies.length; i++) {
      const movieInfo = yield call(getMoviesInfo, movieId.movies[i]);
      allMoviesInfo.push(movieInfo);
    }

    yield put(saveAllMoviesAction(allMoviesInfo));
  } catch (err) {
    console.error("ERROR", err);
  }
}

export default function* watcherCart() {
  yield takeEvery(GET_MOVIE_ID, workerFavoritmovieId);
}
