import React, { useState, useCallback } from "react";
import { MdEventSeat } from "react-icons/md";
import "../styles/SeatSelection.css";

const SeatSelection = ({ handleBooking }) => {
  const seatTypes = {
    normal: 200,
    superior: 300,
    sofa: 600,
  };

  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelection = useCallback(
    (seat) => {
      setSelectedSeats((prevSelectedSeats) => {
        const index = prevSelectedSeats.indexOf(seat);
        if (index > -1) {
          return prevSelectedSeats.filter(
            (selectedSeat) => selectedSeat !== seat
          );
        } else {
          return [...prevSelectedSeats, seat];
        }
      });
    },
    [setSelectedSeats]
  );

  const totalCost = selectedSeats.reduce(
    (total, seat) => total + seatTypes[seat.split("-")[0]],
    0
  );

  const renderSeatOptions = useCallback(() => {
    const sections = [
      { name: "Normal Seats", count: 50, type: "normal" },
      { name: "Superior Seats", count: 30, type: "superior" },
      { name: "Sofa Seats", count: 20, type: "sofa" },
    ];

    return sections
      .map((section) => (
        <div key={section.type}>
          <h3>{section.name}</h3>
          <div className="seat-grid">
            {[...Array(Math.ceil(section.count / 10))].map((_, rowIndex) => (
              <div key={rowIndex} className="seat-row">
                <div className="row-label">
                  {String.fromCharCode(65 + rowIndex)}
                </div>
                {Array.from({ length: 10 }, (_, colIndex) => {
                  const seatIndex = rowIndex * 10 + colIndex + 1;
                  if (seatIndex <= section.count) {
                    const seatId = `${section.type}-${seatIndex}`;
                    return (
                      <div
                        key={seatId}
                        className={`seat ${
                          selectedSeats.includes(seatId) ? "selected" : ""
                        }`}
                        onClick={() => handleSeatSelection(seatId)}
                      >
                        <MdEventSeat className="seat-icon" />
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            ))}
          </div>
        </div>
      ))
      .reverse();
  }, [selectedSeats, handleSeatSelection]);

  return (
    <div className="seat-selection-container">
      <h2>Seat Selection</h2>
      <p className="text">Please Select your seats 💺</p>
      <div className="seating-options">{renderSeatOptions()}</div>
      <p className="text">Total: ${totalCost}</p>
      <p className="text">Selected Seats: {selectedSeats.join(", ")}</p>
      <button onClick={() => handleBooking(selectedSeats, totalCost)}>
        Book Now
      </button>
    </div>
  );
};

export default SeatSelection;
