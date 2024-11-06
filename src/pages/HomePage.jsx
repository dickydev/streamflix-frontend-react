import { useState, useEffect } from "react";
import { fetchMoviesNowPlaying, fetchMovieGenres } from "../services/tmdbApi";
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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [genresList, setGenresList] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("query") || ""
  );

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetchMovieGenres();
        setGenresList(response.data.genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, []);

  console.log(movies);
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

  const handleGenreChange = (event) => {
    setSelectedGenres(event.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    selectedGenres.length === 0
      ? true
      : movie.genre_ids.some((genreId) => selectedGenres.includes(genreId))
  );

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
        sx={{
          mb: 3,
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
            },
            "&:hover fieldset": {
              borderColor: "white", 
            },
            "&.Mui-focused fieldset": {
              borderColor: "white", 
            },
          },
        }}
      />

      {genresList.length > 0 && (
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel>Genres</InputLabel>
          <Select
            label="Genres"
            multiple
            value={selectedGenres}
            onChange={handleGenreChange}
            renderValue={(selected) =>
              selected
                .map((id) => genresList.find((genre) => genre.id === id)?.name)
                .join(", ")
            }
            variant="outlined"
            InputProps={{
              sx: {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
              },
            }}
          >
            {genresList.map((genre) => (
              <MenuItem key={genre.id} value={genre.id}>
                {genre.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      <Grid container spacing={3} justifyContent="center">
        {filteredMovies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
            <Box display="flex" justifyContent="center">
              <MovieCard movie={movie} genresList={genresList} />
            </Box>
          </Grid>
        ))}
      </Grid>

      <Button
        variant="contained"
        onClick={loadMore}
        sx={{
          marginTop: 4,
          width: "100%",
          backgroundColor: "white",
          color: "black",
        }}
      >
        Load More
      </Button>
    </Container>
  );
};

export default HomePage;
