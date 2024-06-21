import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEvents } from "../redux/actions/eventActions";
import { Link } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import Navbar from "../components/Navbar";
import "../styles/EventCard.css";

const NearbyEvents = () => {
  const dispatch = useDispatch();
  const { events, loading, error } = useSelector((state) => state.event);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="page-header">
        <div className="nav-bar">
          <Navbar />
          <SearchBox searchType="events" />
        </div>
      </div>
      <h2 className="heading">Nearby Events</h2>
      <div className="event-list">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.title} />
            <div className="info">
              <h3>{event.title}</h3>
              <p className="subheading">
                Date: <span>{event.date}</span>
              </p>
              <p className="subheading">
                Location: <span>{event.location} </span>
              </p>
              <p className="subheading">
                Description: <span>{event.description}</span>
              </p>
              <p className="subheading">
                Ticket Price: <span>${event.ticketPrice}</span>
              </p>
              <div className="event-book">
                <Link to={`/events/${event.id}`}>
                  <button>Book Now</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NearbyEvents;
