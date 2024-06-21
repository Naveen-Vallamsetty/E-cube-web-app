import * as actionTypes from "../actions/actionTypes";

const initialState = {
  bookings: [],
  loading: false,
  error: null,
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BOOK_TICKET_REQUEST:
    case actionTypes.FETCH_BOOKINGS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.BOOK_TICKET_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case actionTypes.BOOK_TICKET_FAILURE:
    case actionTypes.FETCH_BOOKINGS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.FETCH_BOOKINGS_SUCCESS:
      return {
        ...state,
        bookings: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default bookingReducer;
