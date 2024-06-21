import React from "react";
import { Link } from "react-router-dom";
import "../styles/PaymentPage.css";

const PaymentSuccessPage = () => {
  return (
    <div className="payment-success">
      <h2>Payment Success</h2>
      <p>Your payment was successful!</p>
      <p>Thank you for your booking.</p>
      <Link to="/mybookings">
        <button>View Bookings</button>
      </Link>
    </div>
  );
};

export default PaymentSuccessPage;
