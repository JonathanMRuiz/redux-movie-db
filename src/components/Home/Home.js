import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";
import MovieListing from "../MovieListing/MovieListing";
import axios from "axios";
const Home = () => {
  const MOVIE_TEXT = "Batman";
  const API_KEY = "e35ad82b5ef2e9b7d942e096cd8d28c8";
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${MOVIE_TEXT}`
        )
        .then(({ data }) => {
          dispatch(addMovies(data.results));
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchMovies();
  }, [dispatch]);

  return (
    <div className="banner-img">
      <MovieListing />
    </div>
  );
};

export default Home;
