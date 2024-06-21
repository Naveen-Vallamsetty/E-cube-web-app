import { takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import * as actionTypes from "../actions/actionTypes";
import { API_URL } from "../../config/api";

function* fetchUpcomingMoviesSaga() {
  try {
    const response = yield call(axios.get, `${API_URL}/upcomingMovies`);
    yield put({
      type: actionTypes.FETCH_UPCOMING_MOVIES_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({
      type: actionTypes.FETCH_UPCOMING_MOVIES_FAILURE,
      payload: error.message,
    });
  }
}

function* watchUpcomingMovies() {
  yield takeLatest(
    actionTypes.FETCH_UPCOMING_MOVIES_REQUEST,
    fetchUpcomingMoviesSaga
  );
}

export default watchUpcomingMovies;
