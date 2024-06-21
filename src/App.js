import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import LatestMovies from "./Pages/LatestMovies";
import UpcomingMovies from "./Pages/UpcomingMovies";
import NearbyEvents from "./Pages/NearbyEvents";
import LatestMovieDetails from "./Pages/LatestMovieDetails";
import UpcomingMovieDetails from "./Pages/UpcomingMovieDetails";
import BookingPage from "./Pages/BookingPage";
import Confirmation from "./components/Confirmation";
import TicketPage from "./Pages/TicketPage";
import PaymentPage from "./Pages/PaymentPage";
import PaymentSuccessPage from "./Pages/PaymentSuccessPage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/latest" element={<LatestMovies />} />
          <Route path="/latest/:id" element={<LatestMovieDetails />} />
          <Route path="/upcoming" element={<UpcomingMovies />} />
          <Route
            path="/upcomingMovies/:id"
            element={<UpcomingMovieDetails />}
          />
          <Route path="/events" element={<NearbyEvents />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/mybookings" element={<TicketPage />} />

          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/payment-success" element={<PaymentSuccessPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
