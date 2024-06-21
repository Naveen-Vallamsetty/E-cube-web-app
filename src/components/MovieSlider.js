// src/components/MovieSlider.js

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageSlider from "./ImageSlider";
import { fetchMovies } from "../redux/actions/movieActions";

const MovieSlider = () => {
  const dispatch = useDispatch();
  const latest = useSelector((state) => state.movie.latest);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  // Check if movies is undefined before mapping over it
  if (!latest) {
    return <div>Loading...</div>;
  }

  const images = latest.map((movie) => movie.image);

  return (
    <div>
      <ImageSlider images={images} />
    </div>
  );
};

export default MovieSlider;
