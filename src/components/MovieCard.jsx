import PropTypes from "prop-types";
import { calculatePrice } from "../utils/priceCalculator";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const price = calculatePrice(movie.vote_average);

  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <p>Price: Rp. {price.toLocaleString("id-ID")}</p>
      <Link
        to={`/${movie.id}-${movie.title.replace(/\s+/g, "-").toLowerCase()}`}
      >
        Details
      </Link>
    </div>
  );
};

// Define propTypes for MovieCard component
MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
