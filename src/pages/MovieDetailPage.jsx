import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails, fetchSimilarMovies } from "../services/tmdbApi";
import { calculatePrice } from "../utils/priceCalculator";
import MovieCard from "../components/MovieCard";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const response = await fetchMovieDetails(movieId);
        setMovie(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const getSimilarMovies = async () => {
      try {
        const response = await fetchSimilarMovies(movieId);
        setSimilarMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    getMovieDetails();
    getSimilarMovies();
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  const price = calculatePrice(movie.vote_average);

  return (
    <div>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <p>Rating: {movie.vote_average}</p>
      <p>Price: Rp. {price.toLocaleString("id-ID")}</p>
      <p>Duration: {movie.runtime} minutes</p>
      <p>{movie.overview}</p>

      <button>Beli Film Ini</button>

      <h2>Similar Movies</h2>
      <div className="similar-movies">
        {similarMovies.map((simMovie) => (
          <MovieCard key={simMovie.id} movie={simMovie} />
        ))}
      </div>
    </div>
  );
};

export default MovieDetailPage;
