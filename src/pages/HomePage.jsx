import { useState, useEffect } from "react";
import { fetchMoviesNowPlaying } from "../services/tmdbApi";
import MovieCard from "../components/MovieCard";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetchMoviesNowPlaying(page);
        setMovies((prevMovies) => [...prevMovies, ...response.data.results]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, [page]);

  const loadMore = () => setPage(page + 1);

  return (
    <div>
      <h1>Now Playing Movies</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <button onClick={loadMore}>Load More</button>
    </div>
  );
};

export default HomePage;
