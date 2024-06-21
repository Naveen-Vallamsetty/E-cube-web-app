import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bookTicket } from "../redux/actions/bookingActions";
import SelectedShowTimings from "../components/SelectedShowTimings";
import SeatSelection from "../components/SeatSelection";
import Navbar from "../components/Navbar";
import "../styles/BookingPage.css";

const BookingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedShowTime, setSelectedShowTime] = useState("");
  const movieDetails = useSelector((state) => state.movieDetails.movieDetails);
  const isBookingRef = useRef(false);

  const handleBooking = (selectedSeats, totalCost) => {
    if (!isBookingRef.current) {
      isBookingRef.current = true;
      const bookingData = {
        movieImg: movieDetails.image,
        movieName: movieDetails.title,
        selectedDate,
        selectedShowTime,
        selectedSeats,
        totalCost,
      };

      dispatch(bookTicket(bookingData))
        .then(() => {
          // Navigate to confirmation page
          navigate("/confirmation", { state: bookingData });
          window.alert("Redirecting to Payment Page");
        })
        .catch((error) => {
          console.error("Booking failed:", error);
        })
        .finally(() => {
          isBookingRef.current = false;
        });
    }
  };

  return (
    <div>
      <div className="page-header nav-bar">
        <Navbar />
      </div>
      <h2 className="heading">Booking Page</h2>
      {movieDetails ? (
        <div className="booking-details">
          <img src={movieDetails.image} alt={movieDetails.title} />
          <h3 className="movie-title">{movieDetails.title}</h3>
          <div className="selected-info">
            <SelectedShowTimings
              id={movieDetails.id}
              setSelectedDate={setSelectedDate}
              setSelectedShowTime={setSelectedShowTime}
              className="selected-show-timings"
            />
          </div>
          <SeatSelection handleBooking={handleBooking} />
        </div>
      ) : (
        <p>No movie details available</p>
      )}
    </div>
  );
};

export default BookingPage;
