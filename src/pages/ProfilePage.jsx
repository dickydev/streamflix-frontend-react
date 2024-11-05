import { useEffect, useState } from "react";
import { AuthService } from "../services/AuthService";
import { Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PurchasedMovies from "../components/PurchasedMovies";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  console.log(user);

  return (
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" mt={5}>
        {" "}
        <Typography variant="h4" gutterBottom>
          Profile
        </Typography>
        {user ? (
          <>
            <Typography variant="h6" gutterBottom>
              Username: {user.username}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Saldo: Rp. {user.saldo?.toLocaleString("id-ID") || "0"}
            </Typography>
            <PurchasedMovies purchases={user.purchases} />{" "}
          </>
        ) : (
          <Typography variant="body1" color="error">
            Anda belum login.
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default ProfilePage;
