import * as actionTypes from "../actions/actionTypes";

const initialState = {
  upcomingMovieDetails: [],
  loading: false,
  error: null,
};

const upcomingMovieDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_UPCOMING_MOVIE_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_UPCOMING_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        upcomingMovieDetails: action.payload,
        loading: false,
        error: null,
      };
    case actionTypes.FETCH_UPCOMING_MOVIE_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default upcomingMovieDetailsReducer;
