import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../redux/actions/movieActions";
import MovieSlider from "../components/MovieSlider";
import SearchBox from "../components/SearchBox";
import Navbar from "../components/Navbar";
import "../styles/HomePage.css";
import "../styles/Navbar.css";

const Home = () => {
  const dispatch = useDispatch();
  const { latest } = useSelector((state) => state.movie);
  console.log(latest.img);
  const [showMovieSlider, setShowMovieSlider] = useState(true);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  useEffect(() => {
    const latestCopy = [...latest];
    const shuffledMovies = latestCopy.sort(() => Math.random() - 0.5);
    const randomMovies = shuffledMovies.slice(0, 4);
    setRecommendedMovies(randomMovies);
  }, [latest]);

  const handleLatestMoviesClick = () => {
    setShowMovieSlider(false);
  };

  return (
    <div className="home-container">
      <div className="page-header">
        <div className="nav-bar">
          <Navbar />
          <SearchBox searchType="movies" />
        </div>
        {/* Display buttons to navigate to other sections */}
        <div className="movie-buttons">
          <Link to="/latest" onClick={handleLatestMoviesClick}>
            <button>Latest Movies</button>
          </Link>
          <Link to="/upcoming">
            <button>Upcoming Movies</button>
          </Link>
          <Link to="/events">
            <button>Nearby Events</button>
          </Link>
          <Link to="/mybookings">
            <button>My Bookings</button>
          </Link>
        </div>
      </div>

      {/* Display MovieSlider */}
      <div className="movieslider-container">
        {showMovieSlider && <MovieSlider />}
      </div>
      {/* Display recommended movies */}
      <div className="recommend-movies">
        <h2 className="heading">Recommended Movies</h2>
        <div className="list">
          {recommendedMovies.map((movie, index) => (
            <div className="card" key={index}>
              <img src={movie.image} alt={movie.title} className="movie-img" />
              <div className="info">
                <h3>{movie.title}</h3>
                <Link
                  to={{
                    pathname: `/latest/${movie.id}`,
                  }}
                >
                  <button>Book Now</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
