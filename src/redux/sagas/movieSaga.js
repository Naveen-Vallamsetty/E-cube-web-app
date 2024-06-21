import { takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import * as actionTypes from "../actions/actionTypes";
import { API_URL } from "../../config/api";

function* fetchMoviesSaga() {
  try {
    const response = yield call(axios.get, `${API_URL}/latest`);
    yield put({
      type: actionTypes.FETCH_MOVIES_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({
      type: actionTypes.FETCH_MOVIES_FAILURE,
      payload: error.message,
    });
  }
}

function* watchMovies() {
  yield takeLatest(actionTypes.FETCH_MOVIES_REQUEST, fetchMoviesSaga);
}

export default watchMovies;
