import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUpcomingMovieDetails } from "../redux/actions/upcomingMovieActions";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Navbar.css";
import "../styles/DetailsCard.css";

const UpcomingMovieDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { upcomingMovieDetails, loading, error } = useSelector(
    (state) => state.upcomingMovieDetails
  );

  useEffect(() => {
    dispatch(fetchUpcomingMovieDetails(id));
  }, [dispatch, id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!upcomingMovieDetails) return <p>No movie details available</p>;

  return (
    <>
      <div className="page-header">
        <div className="nav-bar">
          <Navbar />
        </div>
      </div>

      <h2 className="heading">Upcoming Movie Details</h2>

      <div className="movie-details-container">
        <div className="movie-details-card">
          <div className="movie-details">
            <img
              src={upcomingMovieDetails.image}
              alt={upcomingMovieDetails.title}
            />
            <h3>{upcomingMovieDetails.title}</h3>
            <p className="subheading">
              Genre: <span>{upcomingMovieDetails.genre} </span>
            </p>
            <p className="subheading">
              Director: <span>{upcomingMovieDetails.director}</span>
            </p>
            <p className="subheading">
              Plot: <span>{upcomingMovieDetails.plot}</span>
            </p>
            <p className="subheading">
              Release Date: <span>{upcomingMovieDetails.releaseDate}</span>
            </p>
            <p className="subheading">
              Normal Price: <span>{upcomingMovieDetails.prices?.normal}</span>
            </p>
            <p className="subheading">
              Superior Price:
              <span> {upcomingMovieDetails.prices?.superior}</span>
            </p>
            <p className="subheading">
              Sofa Price: <span> {upcomingMovieDetails.prices?.sofa}</span>
            </p>
            <Link to="/booking">
              <button>Book Now</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="back-button">
        <Link to="/upcoming">
          <button>Back to Upcoming Movies</button>
        </Link>
      </div>
    </>
  );
};

export default UpcomingMovieDetails;
