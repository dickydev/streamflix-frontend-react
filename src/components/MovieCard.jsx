import PropTypes from "prop-types";
import { calculatePrice } from "../utils/priceCalculator";
import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Chip,
  Rating,
} from "@mui/material";

const MovieCard = ({ movie, genresList }) => {
  const price = calculatePrice(movie.vote_average);
  const movieGenres = movie.genre_ids.map(
    (genreId) => genresList.find((genre) => genre.id === genreId)?.name
  );

  const roundedVoteAverage = Math.round(movie.vote_average * 10) / 10;

  return (
    <Card sx={{ width: 250, margin: "0 auto" }}>
      <CardMedia
        component="img"
        height="450"
        image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          sx={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {movie.title}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Rating
            value={roundedVoteAverage / 2} 
            precision={0.1} 
            readOnly
          />
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginLeft: 1 }}
          >
            {roundedVoteAverage} / 10
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          Price: Rp. {price.toLocaleString("id-ID")}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            overflowX: "auto",
            marginTop: 1,
            paddingBottom: "8px",
            maxWidth: "100%",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {movieGenres.map((genre, index) => (
            <Chip
              key={index}
              label={genre}
              sx={{
                margin: "2px",
                backgroundColor: "#e0e0e0",
                color: "#555",
                whiteSpace: "nowrap",
              }}
            />
          ))}
        </Box>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to={`/${movie.id}-${movie.title.replace(/\s+/g, "-").toLowerCase()}`}
          sx={{ marginTop: 1, display: "flex" }}
        >
          Details
        </Button>
      </CardContent>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
  genresList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MovieCard;
