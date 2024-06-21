import * as actionTypes from "../actions/actionTypes";

const initialState = {
  searchResults: [],
  loading: false,
  error: null,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        searchResults: action.payload,
        loading: false,
        error: null,
      };
    case actionTypes.SEARCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
