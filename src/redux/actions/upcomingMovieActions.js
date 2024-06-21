import axios from "axios";
import * as actionTypes from "./actionTypes";
import { API_URL } from "../../config/api";

export const fetchUpcomingMoviesRequest = () => ({
  type: actionTypes.FETCH_UPCOMING_MOVIES_REQUEST,
});

export const fetchUpcomingMoviesSuccess = (upcomingMovies) => ({
  type: actionTypes.FETCH_UPCOMING_MOVIES_SUCCESS,
  payload: upcomingMovies,
});

export const fetchUpcomingMoviesFailure = (error) => ({
  type: actionTypes.FETCH_UPCOMING_MOVIES_FAILURE,
  payload: error,
});

export const fetchUpcomingMovies = () => {
  return async (dispatch) => {
    dispatch(fetchUpcomingMoviesRequest());
    try {
      const response = await axios.get(`${API_URL}/upcomingMovies`);
      dispatch(fetchUpcomingMoviesSuccess(response.data));
    } catch (error) {
      dispatch(fetchUpcomingMoviesFailure(error.message));
    }
  };
};

export const fetchUpcomingMovieDetailsRequest = () => ({
  type: actionTypes.FETCH_UPCOMING_MOVIE_DETAILS_REQUEST,
});

export const fetchUpcomingMovieDetailsSuccess = (upcomingMovieDetails) => ({
  type: actionTypes.FETCH_UPCOMING_MOVIE_DETAILS_SUCCESS,
  payload: upcomingMovieDetails,
});

export const fetchUpcomingMovieDetailsFailure = (error) => ({
  type: actionTypes.FETCH_UPCOMING_MOVIE_DETAILS_FAILURE,
  payload: error,
});

export const fetchUpcomingMovieDetails = (id) => {
  return async (dispatch) => {
    dispatch(fetchUpcomingMovieDetailsRequest());
    try {
      const response = await axios.get(`${API_URL}/upcomingMovies/${id}`);
      dispatch(fetchUpcomingMovieDetailsSuccess(response.data));
    } catch (error) {
      dispatch(fetchUpcomingMovieDetailsFailure(error.message));
    }
  };
};

export const searchUpcomingMoviesRequest = () => ({
  type: actionTypes.SEARCH_UPCOMING_MOVIES_REQUEST,
});

export const searchUpcomingMoviesSuccess = (upcomingMovies) => ({
  type: actionTypes.SEARCH_UPCOMING_MOVIES_SUCCESS,
  payload: upcomingMovies,
});

export const searchUpcomingMoviesFailure = (error) => ({
  type: actionTypes.SEARCH_UPCOMING_MOVIES_FAILURE,
  payload: error,
});

export const searchUpcomingMovies = (searchTerm) => {
  return async (dispatch) => {
    dispatch(searchUpcomingMoviesRequest());
    try {
      const response = await axios.get(
        `${API_URL}/upcomingMovies?title=${searchTerm}`
      );
      dispatch(searchUpcomingMoviesSuccess(response.data));
    } catch (error) {
      dispatch(searchUpcomingMoviesFailure(error.message));
    }
  };
};
