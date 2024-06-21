import * as actionTypes from "../actions/actionTypes";

const initialState = {
  events: [],
  loading: false,
  error: null,
};

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_EVENTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.payload,
        loading: false,
        error: null,
      };
    case actionTypes.FETCH_EVENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default eventReducer;
