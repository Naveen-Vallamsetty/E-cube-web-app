import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMovies } from "../redux/actions/movieActions";
import SearchBox from "../components/SearchBox";
import Navbar from "../components/Navbar";

const LatestMovies = () => {
  const dispatch = useDispatch();
  const { latest, loading, error } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className="page-header">
        <div className="nav-bar">
          <Navbar />
          <SearchBox searchType="movies" />
        </div>
      </div>
      <h2 className="heading">Latest Movies</h2>

      <div className="list">
        {latest.map((movie) => (
          <div key={movie.id} className="card">
            <Link to={`/latest/${movie.id}`}>
              <img src={movie.image} alt={movie.title} />
            </Link>
            <div className="info">
              <h3>{movie.title}</h3>
              <Link to={`/latest/${movie.id}`}>
                <button>Book Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestMovies;
