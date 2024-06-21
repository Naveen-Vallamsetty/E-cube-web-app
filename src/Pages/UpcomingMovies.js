import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUpcomingMovies } from "../redux/actions/upcomingMovieActions";
import { Link } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import Navbar from "../components/Navbar";

const UpcomingMovies = () => {
  const dispatch = useDispatch();
  const { upcomingMovies, loading, error } = useSelector(
    (state) => state.upcomingMovie
  );

  useEffect(() => {
    dispatch(fetchUpcomingMovies());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className="page-header">
        <div className="nav-bar">
          <Navbar />
          <SearchBox searchType="upcomingMovies" />
        </div>
      </div>
      <h2 className="heading">Upcoming Movies</h2>
      <div className="list">
        {upcomingMovies.map((movie) => (
          <div key={movie.id} className="card">
            <Link to={`/upcomingMovies/${movie.id}`}>
              <img src={movie.image} alt={movie.title} />
            </Link>
            <div className="info">
              <h3>{movie.title}</h3>

              <Link to="/booking">
                <button>Book Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingMovies;
