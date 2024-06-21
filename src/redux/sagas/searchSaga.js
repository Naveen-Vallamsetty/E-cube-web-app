import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { SEARCH_MOVIES_REQUEST } from "../actions/actionTypes";

import { SEARCH_UPCOMING_MOVIES_REQUEST } from "../actions/actionTypes";

import { SEARCH_EVENTS_REQUEST } from "../actions/actionTypes";
import { API_URL } from "../../config/api";

import {
  searchMoviesSuccess,
  searchMoviesFailure,
} from "../actions/movieActions";

import {
  searchUpcomingMoviesSuccess,
  searchUpcomingMoviesFailure,
} from "../actions/upcomingMovieActions";

import {
  searchEventsSuccess,
  searchEventsFailure,
} from "../actions/eventActions";

// Worker saga for searching movies
function* searchMovies(action) {
  try {
    const response = yield call(
      axios.get,
      `${API_URL}/latest?search=${action.payload}`
    );
    yield put(searchMoviesSuccess(response.data));
  } catch (error) {
    yield put(searchMoviesFailure(error.message));
  }
}

// Worker saga for searching upcoming movies
function* searchUpcomingMovies(action) {
  try {
    const response = yield call(
      axios.get,
      `${API_URL}/upcomingMovies?search=${action.payload}`
    );
    yield put(searchUpcomingMoviesSuccess(response.data));
  } catch (error) {
    yield put(searchUpcomingMoviesFailure(error.message));
  }
}

// Worker saga for searching events
function* searchEvents(action) {
  try {
    const response = yield call(
      axios.get,
      `${API_URL}/events?search=${action.payload}`
    );
    yield put(searchEventsSuccess(response.data));
  } catch (error) {
    yield put(searchEventsFailure(error.message));
  }
}

// Watcher saga to listen for search actions
function* watchSearch() {
  yield takeLatest(SEARCH_MOVIES_REQUEST, searchMovies);
  yield takeLatest(SEARCH_UPCOMING_MOVIES_REQUEST, searchUpcomingMovies);
  yield takeLatest(SEARCH_EVENTS_REQUEST, searchEvents);
}

export default watchSearch;
