import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMoviesNowPlaying = (page = 1) =>
  axios.get(`${BASE_URL}/movie/now_playing`, {
    params: { api_key: API_KEY, region: "ID", page },
  });

export const fetchMovieDetails = (movieId) =>
  axios.get(`${BASE_URL}/movie/${movieId}`, {
    params: { api_key: API_KEY },
  });

export const fetchSimilarMovies = (movieId) =>
  axios.get(`${BASE_URL}/movie/${movieId}/similar`, {
    params: { api_key: API_KEY },
  });
