import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovieDetails } from "../redux/actions/movieActions";
import "../styles/BookingPage.css";

const SelectedShowTimings = ({ id, setSelectedDate, setSelectedShowTime }) => {
  const dispatch = useDispatch();
  const [showTimings, setShowTimings] = useState([]);
  const {
    movieDetails,
    loading: detailsLoading,
    error: detailsError,
  } = useSelector((state) => state.movieDetails);

  useEffect(() => {
    if (id) {
      dispatch(fetchMovieDetails(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (movieDetails && movieDetails.showTimings) {
      setShowTimings(movieDetails.showTimings);
    }
  }, [movieDetails]);

  if (detailsLoading) return <p>Loading...</p>;
  if (detailsError) return <p>Error: {detailsError}</p>;

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleShowTimeChange = (event) => {
    setSelectedShowTime(event.target.value);
  };

  if (!movieDetails) return null;

  return (
    <div className="selected-show-timings">
      <div>
        <label htmlFor="date">Select Date:</label>
        <input type="date" id="date" onChange={handleDateChange} />
      </div>
      <div>
        <label htmlFor="showTime">Select Show Time:</label>
        <select id="showTime" onChange={handleShowTimeChange}>
          <option value="">Select Show Time</option>
          {showTimings.map((timing, index) => (
            <option key={index} value={timing}>
              {timing}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectedShowTimings;
