import PropTypes from "prop-types";
import { calculatePrice } from "../utils/priceCalculator";
import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

const MovieDetailCard = ({ movie }) => {
  const price = calculatePrice(movie.vote_average);

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
        <Typography variant="body2" color="text.secondary">
          Price: Rp. {price.toLocaleString("id-ID")}
        </Typography>
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

MovieDetailCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieDetailCard;
