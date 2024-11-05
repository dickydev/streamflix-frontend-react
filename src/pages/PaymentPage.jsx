import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AuthService } from "../services/AuthService";
import { Container, Typography, Button } from "@mui/material";

const PaymentPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [user, setUser] = useState(AuthService.getCurrentUser());

  useEffect(() => {
    if (!state || !state.movie) {
      navigate("/cart");
    }
  }, [state, navigate]);

  const handlePayment = () => {
    const movie = state.movie;

    if (user.saldo >= movie.price) {
      const updatedUser = {
        ...user,
        saldo: user.saldo - movie.price,
        purchases: [...user.purchases, movie],
      };
      AuthService.updateUserData(updatedUser);
      setUser(updatedUser);
      navigate("/profile");
    } else {
      alert("Saldo tidak cukup.");
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Pembayaran
      </Typography>
      <Typography variant="body1">Film: {state.movie.title}</Typography>
      <Typography variant="body1">
        Harga: Rp. {state.movie.price.toLocaleString("id-ID")}
      </Typography>
      <Typography variant="body1">
        Saldo Tersisa: Rp. {user.saldo.toLocaleString("id-ID")}
      </Typography>
      <Button variant="contained" color="primary" onClick={handlePayment}>
        Bayar
      </Button>
    </Container>
  );
};

export default PaymentPage;
