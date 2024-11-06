import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMoviesNowPlaying = (page = 1, searchQuery = "") => {
  const url = searchQuery
    ? `${BASE_URL}/search/movie` // Gunakan endpoint pencarian jika searchQuery ada
    : `${BASE_URL}/movie/now_playing`; // Gunakan endpoint untuk film yang sedang tayang

  return axios.get(url, {
    params: {
      api_key: API_KEY,
      region: "ID", // Memfilter film berdasarkan negara
      page,
      query: searchQuery, // Menambahkan query pencarian jika ada
    },
  });
};

export const fetchMovieDetails = (movieId) =>
  axios.get(`${BASE_URL}/movie/${movieId}`, {
    params: { api_key: API_KEY },
  });

export const fetchSimilarMovies = (movieId) =>
  axios.get(`${BASE_URL}/movie/${movieId}/similar`, {
    params: { api_key: API_KEY },
  });
