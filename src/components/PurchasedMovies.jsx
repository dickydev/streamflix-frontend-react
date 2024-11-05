import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

const PurchasedMovies = ({ purchases }) => {
  return (
    <Box sx={{ textAlign: "left", mt: 2 }}>
      {" "}
      <Typography variant="h5" gutterBottom>
        Riwayat Pembelian:
      </Typography>
      {purchases && purchases.length > 0 ? (
        purchases.map((movie, index) => (
          <Box
            key={movie.id || index}
            sx={{ display: "flex", alignItems: "center", mb: 2 }}
          >
            <img
              src={movie.imageUrl}
              alt={movie.title}
              style={{
                width: "100px",
                height: "auto",
                borderRadius: "4px",
                marginRight: "16px",
              }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/default_movie_image.jpg";
              }}
            />
            <Box>
              <Typography variant="body1" fontWeight="bold">
                {movie.title}
              </Typography>
              <Typography variant="body2">
                Price: Rp. {movie.price.toLocaleString("id-ID")}
              </Typography>
            </Box>
          </Box>
        ))
      ) : (
        <Typography variant="body1">Belum ada pembelian</Typography>
      )}
    </Box>
  );
};

PurchasedMovies.propTypes = {
  purchases: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, 
      title: PropTypes.string.isRequired, 
      price: PropTypes.number.isRequired, 
      imageUrl: PropTypes.string, 
    })
  ).isRequired, 
};

export default PurchasedMovies;
