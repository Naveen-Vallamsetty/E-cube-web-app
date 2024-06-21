import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import * as actionTypes from "../actions/actionTypes";
import {
  fetchEventsSuccess,
  fetchEventsFailure,
} from "../actions/eventActions";
import { API_URL } from "../../config/api";

function* fetchEventsSaga() {
  try {
    const response = yield axios.get(`${API_URL}/events`);
    yield put(fetchEventsSuccess(response.data));
  } catch (error) {
    yield put(fetchEventsFailure(error.message));
  }
}

function* eventSaga() {
  yield takeLatest(actionTypes.FETCH_EVENTS_REQUEST, fetchEventsSaga);
}

export default eventSaga;
