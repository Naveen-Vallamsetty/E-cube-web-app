import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import upcomingMovieReducer from "./upcomingMovieReducer";
import eventReducer from "./eventReducer";
import bookingReducer from "./bookingReducer";
import movieDetailsReducer from "./movieDetailsReducer";
import upcomingMovieDetailsReducer from "./upcomingMovieDetailsReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  movie: movieReducer,
  upcomingMovie: upcomingMovieReducer,
  event: eventReducer,
  booking: bookingReducer,
  movieDetails: movieDetailsReducer,
  upcomingMovieDetails: upcomingMovieDetailsReducer,
  search: searchReducer,
});

export default rootReducer;
