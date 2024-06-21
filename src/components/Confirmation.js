import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import PaymentPage from "../Pages/PaymentPage";
import "../styles/PaymentPage.css";

const Confirmation = () => {
  const location = useLocation();
  const {
    movieImg,
    movieName,
    selectedDate,
    selectedShowTime,
    selectedSeats,
    totalCost,
  } = location.state || {};

  // Check if selectedSeats is defined and not null
  const formattedSelectedSeats = selectedSeats ? selectedSeats.join(", ") : "";

  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handlePaymentModal = () => {
    setShowPaymentModal(true);
  };

  const handleClosePaymentModal = () => {
    setShowPaymentModal(false);
  };

  return (
    <div>
      <div className="page-header">
        <div className="nav-bar">
          <Navbar />
        </div>
      </div>
      <h2 className="heading">Booking Confirmation</h2>
      {movieName ? (
        <div className="booking-details">
          {/* Display movie image */}
          <img src={movieImg} alt={movieName} />

          <p className="text">Movie: {movieName}</p>
          <p className="">Date: {selectedDate}</p>
          <p className="text">Show Time: {selectedShowTime}</p>
          <p className="text">Selected Seats: {formattedSelectedSeats}</p>
          <p className="text">Total Cost: ${totalCost}</p>
          <button onClick={handlePaymentModal}>
            Proceed to Make a Payment
          </button>
          {showPaymentModal && (
            <div className="payment-modal-overlay">
              <div className="payment-modal">
                <PaymentPage onClose={handleClosePaymentModal} />
              </div>
            </div>
          )}
        </div>
      ) : (
        <p>No booking details available</p>
      )}
    </div>
  );
};

export default Confirmation;
