import * as actionTypes from "../actions/actionTypes";

const initialState = {
  latest: [],
  loading: false,
  error: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        latest: action.payload,
        loading: false,
        error: null,
      };
    case actionTypes.FETCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
