import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Button,
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Divider,
  Box,
} from "@mui/material";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(items);
  }, []);

  const handleProceedToPayment = () => {
    navigate("/payment", { state: { cartItems } });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Keranjang
      </Typography>

      {cartItems.length === 0 ? (
        <Typography variant="body1" color="textSecondary">
          Keranjang Anda kosong.
        </Typography>
      ) : (
        cartItems.map((item, index) => (
          <Card key={index} sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="body2" color="textSecondary">
                Harga: Rp. {item.price.toLocaleString("id-ID")}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="secondary">
                Hapus
              </Button>
            </CardActions>
          </Card>
        ))
      )}

      <Divider sx={{ my: 2 }} />

      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">
          Total: Rp.{" "}
          {cartItems
            .reduce((total, item) => total + item.price, 0)
            .toLocaleString("id-ID")}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleProceedToPayment}
          disabled={cartItems.length === 0}
        >
          Lanjut ke Pembayaran
        </Button>
      </Box>
    </Container>
  );
};

export default CartPage;
