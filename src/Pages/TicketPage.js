import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookings } from "../redux/actions/bookingActions";
import { PDFDownloadLink } from "@react-pdf/renderer";
import BookingDetailsPDF from "../components/BookingDetailsPDF";
import QRCode from "react-qr-code";
import Navbar from "../components/Navbar";
import "../styles/BookingList.css";

const BookingList = () => {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.booking.bookings);
  const loading = useSelector((state) => state.booking.loading);
  const error = useSelector((state) => state.booking.error);

  useEffect(() => {
    dispatch(fetchBookings());
  }, [dispatch]);

  return (
    <div>
      <div className="page-header">
        <div className="nav-bar">
          <Navbar />
        </div>
      </div>
      <h2 className="heading">Bookings List</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            <div className="booking-card">
              <QRCode value={JSON.stringify(booking)} className="qr-code" />
              <div className="vertical-line"></div>
              <div className="booking-details">
                <p className="booking-detail">Movie: {booking.movieName}</p>
                <p className="booking-detail">Date: {booking.selectedDate}</p>
                <p className="booking-detail">
                  Show Time: {booking.selectedShowTime}
                </p>
                <p className="booking-detail">
                  Selected Seats: {booking.selectedSeats.join(", ")}
                </p>
                <p className="booking-detail">
                  Total Cost: ${booking.totalCost}
                </p>
                <div className="download-link">
                  <PDFDownloadLink
                    document={<BookingDetailsPDF booking={booking} />}
                    fileName={`booking_details_${booking.movieName.replace(
                      / /g,
                      "_"
                    )}.pdf`}
                  >
                    {({ loading }) =>
                      loading
                        ? "Loading document..."
                        : "Download Booking Details PDF"
                    }
                  </PDFDownloadLink>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingList;
