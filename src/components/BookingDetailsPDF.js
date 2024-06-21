import React from "react";
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";
import "../styles/PDFstyles.css";

const BookingDetailsPDF = ({ booking }) => (
  <Document>
    <Page size="A4" className="page">
      <View className="section">
        <Text className="title">Booking Details</Text>

        {/* Movie Image */}
        <Image className="image" src={booking.movieImg} />

        <Text>Movie: {booking.movieName}</Text>
        <Text>Date: {booking.selectedDate}</Text>
        <Text>Show Time: {booking.selectedShowTime}</Text>
        <Text>Selected Seats: {booking.selectedSeats.join(", ")}</Text>
        <Text>Total Cost: ${booking.totalCost}</Text>
      </View>
    </Page>
  </Document>
);

export default BookingDetailsPDF;
