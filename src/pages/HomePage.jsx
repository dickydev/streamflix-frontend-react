import { useState, useEffect } from "react";
import { fetchMoviesNowPlaying } from "../services/tmdbApi";
import MovieCard from "../components/MovieCard";
import { useSearchParams } from "react-router-dom";
import { Container, Grid, Typography, Button, Box } from "@mui/material";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetchMoviesNowPlaying(page);
        setMovies((prevMovies) => [...prevMovies, ...response.data.results]);
        setSearchParams({ page });
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, [page, setSearchParams]);

  const loadMore = () => setPage(page + 1);

  return (
    <Container maxWidth="lg" sx={{ textAlign: "center" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Now Playing Movies
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
            <Box display="flex" justifyContent="center">
              <MovieCard movie={movie} />
            </Box>
          </Grid>
        ))}
      </Grid>

      <Button
        variant="contained"
        color="secondary"
        onClick={loadMore}
        sx={{ marginTop: 4 }}
      >
        Load More
      </Button>
    </Container>
  );
};

export default HomePage;
