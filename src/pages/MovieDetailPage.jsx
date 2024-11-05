import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchMovieDetails, fetchSimilarMovies } from "../services/tmdbApi";
import { calculatePrice } from "../utils/priceCalculator";
import MovieCard from "../components/MovieCard";
import { Container, Typography, Grid, Button, Box } from "@mui/material";
import { AuthService } from "../services/AuthService";

const MovieDetailPage = () => {
  const { movieId: rawMovieId } = useParams();
  const movieId = rawMovieId.split("-")[0];
  const [movie, setMovie] = useState(null);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getMovieDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetchMovieDetails(movieId);
        setMovie(response.data);
      } catch (error) {
        setError("Error fetching movie details.", error);
      } finally {
        setLoading(false);
      }
    };

    const getSimilarMovies = async () => {
      try {
        const response = await fetchSimilarMovies(movieId);
        setSimilarMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching similar movies:", error);
      }
    };

    getMovieDetails();
    getSimilarMovies();
  }, [movieId]);

  if (loading) return <Typography>Loading movie details...</Typography>;
  if (error) return <Typography>{error}</Typography>;
  if (!movie) return <Typography>Movie details not available.</Typography>;

  const price = calculatePrice(movie.vote_average);

  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...cartItems, { ...movie, price }];
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    window.dispatchEvent(new Event("storage"));

    alert("Film berhasil ditambahkan ke keranjang!");
  };

  const handlePurchase = () => {
    const currentUser = AuthService.getCurrentUser();
    if (currentUser.saldo >= price) {
      const updatedUser = {
        ...currentUser,
        saldo: currentUser.saldo - price,
        purchases: [
          ...currentUser.purchases,
          {
            id: movieId,
            title: movie.title,
            price,
            imageUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          },
        ],
      };
      AuthService.updateUserData(updatedUser);
      alert("Pembelian berhasil!");
      navigate("/profile");
    } else {
      alert("Saldo tidak mencukupi.");
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        {movie.title}
      </Typography>
      <Box sx={{ display: "flex", gap: 4 }}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          style={{ width: "300px", borderRadius: "8px" }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/default_movie_image.jpg";
          }}
        />
        <Box>
          <Typography variant="body1" paragraph>
            Rating: {movie.vote_average}
          </Typography>
          <Typography variant="body1" paragraph>
            Price: Rp. {price.toLocaleString("id-ID")}
          </Typography>
          <Typography variant="body1" paragraph>
            Duration: {movie.runtime} minutes
          </Typography>
          <Typography variant="body2" paragraph>
            {movie.overview || "No description available."}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={handlePurchase}
          >
            Beli Film Ini
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={handleAddToCart}
          >
            Tambahkan ke Keranjang
          </Button>
        </Box>
      </Box>
      <Typography variant="h5" sx={{ mt: 4 }}>
        Similar Movies
      </Typography>
      <Grid container spacing={3}>
        {similarMovies.map((simMovie) => (
          <Grid item xs={12} sm={6} md={4} key={simMovie.id}>
            <MovieCard movie={simMovie} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MovieDetailPage;
