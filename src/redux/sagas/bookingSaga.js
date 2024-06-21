import { takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import * as actionTypes from "../actions/actionTypes";
import { API_URL } from "../../config/api";

function* bookTicketSaga(action) {
  try {
    yield call(axios.post, `${API_URL}/booking-details`, action.payload);
    yield put({ type: actionTypes.BOOK_TICKET_SUCCESS });
    yield put({ type: actionTypes.FETCH_BOOKINGS_REQUEST });
  } catch (error) {
    yield put({
      type: actionTypes.BOOK_TICKET_FAILURE,
      payload: error.message,
    });
  }
}

function* fetchBookingsSaga() {
  try {
    const response = yield call(axios.get, `${API_URL}/booking-details`);
    yield put({
      type: actionTypes.FETCH_BOOKINGS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({
      type: actionTypes.FETCH_BOOKINGS_FAILURE,
      payload: error.message,
    });
  }
}

function* watchBooking() {
  yield takeLatest(actionTypes.BOOK_TICKET_REQUEST, bookTicketSaga);
  yield takeLatest(actionTypes.FETCH_BOOKINGS_REQUEST, fetchBookingsSaga);
}

export default watchBooking;
