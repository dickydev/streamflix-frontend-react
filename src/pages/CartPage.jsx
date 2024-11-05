import { useNavigate } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";
import PropTypes from "prop-types";

const CartPage = ({ selectedMovie }) => {
  const navigate = useNavigate();

  const handleProceedToPayment = () => {
    navigate("/payment", { state: { movie: selectedMovie } });
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Cart
      </Typography>
      <Typography variant="body1">Film: {selectedMovie.title}</Typography>
      <Typography variant="body1">
        Harga: Rp. {selectedMovie.price.toLocaleString("id-ID")}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleProceedToPayment}
      >
        Lanjut ke Pembayaran
      </Button>
    </Container>
  );
};

CartPage.propTypes = {
  selectedMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartPage;
