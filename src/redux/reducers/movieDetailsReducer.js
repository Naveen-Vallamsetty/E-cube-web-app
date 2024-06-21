import * as actionTypes from "../actions/actionTypes";

const initialState = {
  movieDetails: {},
  loading: false,
  error: null,
};

const movieDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MOVIE_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        movieDetails: action.payload,
        loading: false,
        error: null,
      };
    case actionTypes.FETCH_MOVIE_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default movieDetailsReducer;
