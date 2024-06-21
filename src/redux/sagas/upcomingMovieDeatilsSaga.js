import { takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import * as actionTypes from "../actions/actionTypes";
import { API_URL } from "../../config/api";

function* fetchUpcomingMovieDetailsSaga(action) {
  try {
    const response = yield call(
      axios.get,
      `${API_URL}/upcomingMovies/${action.payload}`
    );
    yield put({
      type: actionTypes.FETCH_UPCOMING_MOVIE_DETAILS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({
      type: actionTypes.FETCH_UPCOMING_MOVIE_DETAILS_FAILURE,
      payload: error.message,
    });
  }
}

function* watchUpcomingMovieDetails() {
  yield takeLatest(
    actionTypes.FETCH_UPCOMING_MOVIE_DETAILS_REQUEST,
    fetchUpcomingMovieDetailsSaga
  );
}

export default watchUpcomingMovieDetails;
