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

  console.log(cartItems);
  const handleRemoveItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    window.location.reload();
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
          <Card key={index} sx={{ mb: 2, display: "flex" }}>
            <img
              src={`https://image.tmdb.org/t/p/w500/` + item.poster_path}
              alt={item.title}
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Harga: Rp. {item.price.toLocaleString("id-ID")}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="secondary"
                  onClick={() => handleRemoveItem(index)}
                >
                  Hapus
                </Button>
              </CardActions>
            </Box>
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
