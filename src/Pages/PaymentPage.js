import React, { useState } from "react";
import PaymentSuccessPage from "./PaymentSuccessPage";
import "../styles/PaymentPage.css";

const PaymentPage = ({ onClose }) => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePayment = () => {
    setTimeout(() => {
      setPaymentSuccess(true);
    }, 2000);
  };

  return (
    <div className="payment-modal">
      {!paymentSuccess ? (
        <div>
          <h2>Payment Details</h2>
          <form>
            <div className="form-group">
              <label>Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Expiry Date</label>
              <input
                type="text"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>CVV</label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
              />
            </div>
            <div className="button-group">
              <button type="button" onClick={handlePayment}>
                Make Payment
              </button>
              <button type="button" onClick={onClose}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <PaymentSuccessPage />
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
