import * as actionTypes from "../actions/actionTypes";

const initialState = {
  upcomingMovies: [],
  loading: false,
  error: null,
};

const upcomingMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_UPCOMING_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_UPCOMING_MOVIES_SUCCESS:
      return {
        ...state,
        upcomingMovies: action.payload,
        loading: false,
        error: null,
      };
    case actionTypes.FETCH_UPCOMING_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default upcomingMovieReducer;
