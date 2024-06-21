import axios from "axios";
import * as actionTypes from "./actionTypes";
import { API_URL } from "../../config/api";

export const fetchMoviesRequest = () => ({
  type: actionTypes.FETCH_MOVIES_REQUEST,
});

export const fetchMoviesSuccess = (latest) => ({
  type: actionTypes.FETCH_MOVIES_SUCCESS,
  payload: latest,
});

export const fetchMoviesFailure = (error) => ({
  type: actionTypes.FETCH_MOVIES_FAILURE,
  payload: error,
});

export const fetchMovieDetailsRequest = () => ({
  type: actionTypes.FETCH_MOVIE_DETAILS_REQUEST,
});

export const fetchMovieDetailsSuccess = (movieDetails) => ({
  type: actionTypes.FETCH_MOVIE_DETAILS_SUCCESS,
  payload: movieDetails,
});

export const fetchMovieDetailsFailure = (error) => ({
  type: actionTypes.FETCH_MOVIE_DETAILS_FAILURE,
  payload: error,
});

export const searchMoviesRequest = () => ({
  type: actionTypes.SEARCH_MOVIES_REQUEST,
});

export const searchMoviesSuccess = (latest) => ({
  type: actionTypes.SEARCH_MOVIES_SUCCESS,
  payload: latest,
});

export const searchMoviesFailure = (error) => ({
  type: actionTypes.SEARCH_MOVIES_FAILURE,
  payload: error,
});

export const fetchMovies = () => {
  return async (dispatch) => {
    dispatch(fetchMoviesRequest());
    try {
      const response = await axios.get(`${API_URL}/latest`);
      dispatch(fetchMoviesSuccess(response.data));
    } catch (error) {
      dispatch(fetchMoviesFailure(error.message));
    }
  };
};

export const fetchMovieDetails = (id) => {
  return async (dispatch) => {
    dispatch(fetchMovieDetailsRequest());
    try {
      const response = await axios.get(`${API_URL}/latest/${id}`);
      dispatch(fetchMovieDetailsSuccess(response.data));
    } catch (error) {
      dispatch(fetchMovieDetailsFailure(error.message));
    }
  };
};

export const searchMovies = (searchTerm) => {
  return async (dispatch) => {
    dispatch(searchMoviesRequest());
    try {
      const response = await axios.get(`${API_URL}/latest=${searchTerm}`);
      dispatch(searchMoviesSuccess(response.data));
    } catch (error) {
      dispatch(searchMoviesFailure(error.message));
    }
  };
};
