import { all } from "redux-saga/effects";
import movieSaga from "./movieSaga";
import upcomingMovieSaga from "./upcomingMovieSaga";
import eventSaga from "./eventSaga";
import bookingSaga from "./bookingSaga";
import movieDetailsSaga from "./movieDetailsSaga";
import upcomingMovieDetailsSaga from "./upcomingMovieDeatilsSaga";
import searchSaga from "./searchSaga";

function* rootSaga() {
  yield all([
    movieSaga(),
    upcomingMovieSaga(),
    eventSaga(),
    bookingSaga(),
    movieDetailsSaga(),
    upcomingMovieDetailsSaga(),
    searchSaga(),
  ]);
}

export default rootSaga;
