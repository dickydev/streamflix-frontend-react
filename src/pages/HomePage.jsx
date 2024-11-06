import { useState, useEffect } from "react";
import { fetchMoviesNowPlaying } from "../services/tmdbApi";
import MovieCard from "../components/MovieCard";
import FullScreenSwiper from "../components/FullScreenSwiper";
import { useSearchParams } from "react-router-dom";
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  TextField,
} from "@mui/material";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("query") || ""
  );

  console.log(searchParams);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let response;
        if (searchQuery === "") {
          response = await fetchMoviesNowPlaying(page);
        } else {
          response = await fetchMoviesNowPlaying(page, searchQuery);
        }

        setMovies((prevMovies) =>
          page === 1
            ? response.data.results
            : [...prevMovies, ...response.data.results]
        );

        setSearchParams({ page, query: searchQuery });
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, [page, setSearchParams, searchQuery]);

  const loadMore = () => setPage(page + 1);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    if (searchQuery !== "") {
      setPage(1);
      setMovies([]);
    }
  }, [searchQuery]);

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Box mb={3}>
        <FullScreenSwiper movies={movies} />
      </Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Now Playing Movies
      </Typography>

      <TextField
        label="Search Movies"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={handleSearchChange}
        sx={{ mb: 3 }}
      />

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
        sx={{ marginTop: 4, width: "100%" }}
      >
        Load More
      </Button>
    </Container>
  );
};

export default HomePage;
