import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMoviesNowPlaying = (page = 1, searchQuery = "") => {
  const url = searchQuery
    ? `${BASE_URL}/search/movie`
    : `${BASE_URL}/movie/now_playing`;

  return axios.get(url, {
    params: {
      api_key: API_KEY,
      region: "ID",
      page,
      query: searchQuery,
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

export const fetchMovieGenres = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response;
  } catch (error) {
    console.error("Error fetching genres:", error);
    throw error;
  }
};
