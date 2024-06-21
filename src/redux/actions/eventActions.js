import axios from "axios";
import * as actionTypes from "./actionTypes";
import { API_URL } from "../../config/api";

export const fetchEventsRequest = () => ({
  type: actionTypes.FETCH_EVENTS_REQUEST,
});

export const fetchEventsSuccess = (events) => ({
  type: actionTypes.FETCH_EVENTS_SUCCESS,
  payload: events,
});

export const fetchEventsFailure = (error) => ({
  type: actionTypes.FETCH_EVENTS_FAILURE,
  payload: error,
});

export const fetchEvents = () => {
  return async (dispatch) => {
    dispatch(fetchEventsRequest());
    try {
      const response = await axios.get(`${API_URL}/events`);
      dispatch(fetchEventsSuccess(response.data));
    } catch (error) {
      dispatch(fetchEventsFailure(error.message));
    }
  };
};

export const searchEventsRequest = () => ({
  type: actionTypes.SEARCH_EVENTS_REQUEST,
});

export const searchEventsSuccess = (events) => ({
  type: actionTypes.SEARCH_EVENTS_SUCCESS,
  payload: events,
});

export const searchEventsFailure = (error) => ({
  type: actionTypes.SEARCH_EVENTS_FAILURE,
  payload: error,
});

export const searchEvents = (searchTerm) => {
  return async (dispatch) => {
    dispatch(searchEventsRequest());
    try {
      const response = await axios.get(`${API_URL}/events?title=${searchTerm}`);
      dispatch(searchEventsSuccess(response.data));
    } catch (error) {
      dispatch(searchEventsFailure(error.message));
    }
  };
};
