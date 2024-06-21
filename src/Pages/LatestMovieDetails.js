import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovieDetails } from "../redux/actions/movieActions";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Navbar.css";
import "../styles/DetailsCard.css";

const LatestMovieDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { movieDetails, loading, error } = useSelector(
    (state) => state.movieDetails
  );

  useEffect(() => {
    if (!movieDetails || movieDetails.id !== id) {
      dispatch(fetchMovieDetails(id));
    }
  }, [dispatch, id, movieDetails]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!movieDetails) return <p>No movie details available</p>;

  return (
    <>
      <div className="page-header">
        <div className="nav-bar">
          <Navbar />
        </div>
      </div>
      <h2 className="heading">Movie Details</h2>

      <div className="movie-details-container">
        <div className="movie-details-card">
          <div className="movie-details">
            <img src={movieDetails.image} alt={movieDetails.title} />
            <h3>{movieDetails.title}</h3>
            <p className="subheading">
              Genre: <span>{movieDetails.genre}</span>
            </p>
            <p className="subheading">
              Director: <span>{movieDetails.director}</span>
            </p>
            <p className="subheading">
              Release Date: <span>{movieDetails.releasedDate}</span>
            </p>
            <p className="subheading">
              Duration: <span>{movieDetails.duration}</span>
            </p>
            <p className="subheading">
              Ratings: <span>{movieDetails.ratings}</span>
            </p>
            <p className="subheading">
              Plot: <span>{movieDetails.plot}</span>
            </p>
            <p className="subheading">
              Normal Price: <span>{movieDetails.prices?.normal}</span>
            </p>
            <p className="subheading">
              Superior Price: <span>{movieDetails.prices?.superior}</span>
            </p>
            <p className="subheading">
              Sofa Price: <span>{movieDetails.prices?.sofa}</span>
            </p>
            <Link
              to={{
                pathname: "/booking",
                state: { id: movieDetails.id, from: "LatestMovieDetails" },
              }}
            >
              <button>Book Now</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="back-button">
        <Link to="/latest">
          <button>Back to Latest Movies</button>
        </Link>
      </div>
    </>
  );
};

export default LatestMovieDetails;
