import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AuthService } from "../services/AuthService";
import { Container, Typography, Button } from "@mui/material";

const PaymentPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [user, setUser] = useState(AuthService.getCurrentUser());
  const cartItems = state?.cartItems || [];
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handlePayment = () => {
    if (user.saldo >= totalAmount) {
      const updatedUser = {
        ...user,
        saldo: user.saldo - totalAmount,
        purchases: [...user.purchases, ...cartItems],
      };
      AuthService.updateUserData(updatedUser);
      setUser(updatedUser);
      localStorage.removeItem("cart");
      alert("Pembayaran berhasil!");
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
      {cartItems.map((item, index) => (
        <div key={index}>
          <Typography variant="body1">Film: {item.title}</Typography>
          <Typography variant="body1">
            Harga: Rp. {item.price.toLocaleString("id-ID")}
          </Typography>
        </div>
      ))}
      <Typography variant="body1">
        Total: Rp. {totalAmount.toLocaleString("id-ID")}
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
