import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchMovies } from "../redux/actions/movieActions";
import { searchUpcomingMovies } from "../redux/actions/upcomingMovieActions";
import { searchEvents } from "../redux/actions/eventActions";
import "../styles/SearchBox.css";

const SearchBox = ({ searchType }) => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    switch (searchType) {
      case "movies":
        dispatch(searchMovies(searchTerm));
        break;
      case "upcomingMovies":
        dispatch(searchUpcomingMovies(searchTerm));
        break;
      case "events":
        dispatch(searchEvents(searchTerm));
        break;
      default:
        break;
    }
  };

  return (
    <div className="search-box">
      <input
        type="text"
        className="search-input"
        placeholder={`Search ${searchType}...`}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBox;
