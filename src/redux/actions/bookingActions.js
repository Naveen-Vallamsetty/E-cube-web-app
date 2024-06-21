import axios from "axios";
import * as actionTypes from "./actionTypes";
import { API_URL } from "../../config/api";

export const bookTicketRequest = (bookingData) => ({
  type: actionTypes.BOOK_TICKET_REQUEST,
  payload: bookingData,
});

export const bookTicketSuccess = () => ({
  type: actionTypes.BOOK_TICKET_SUCCESS,
});

export const bookTicketFailure = (error) => ({
  type: actionTypes.BOOK_TICKET_FAILURE,
  payload: error,
});

export const fetchBookingsRequest = () => ({
  type: actionTypes.FETCH_BOOKINGS_REQUEST,
});

export const fetchBookingsSuccess = (bookings) => ({
  type: actionTypes.FETCH_BOOKINGS_SUCCESS,
  payload: bookings,
});

export const fetchBookingsFailure = (error) => ({
  type: actionTypes.FETCH_BOOKINGS_FAILURE,
  payload: error,
});

export const bookTicket = (bookingData) => {
  return async (dispatch) => {
    dispatch(bookTicketRequest(bookingData));
    try {
      await axios.post(`${API_URL}/booking-details`, bookingData);
      dispatch(bookTicketSuccess());
      dispatch(fetchBookings());
    } catch (error) {
      dispatch(bookTicketFailure(error.message));
    }
  };
};

export const fetchBookings = () => {
  return async (dispatch) => {
    dispatch(fetchBookingsRequest());
    try {
      const response = await axios.get(`${API_URL}/booking-details`);
      dispatch(fetchBookingsSuccess(response.data));
    } catch (error) {
      dispatch(fetchBookingsFailure(error.message));
    }
  };
};
