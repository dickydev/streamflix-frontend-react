import { useEffect, useState } from "react";
import { AuthService } from "../services/AuthService";
import { Container, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

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

  return (
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
        <Typography variant="h4" gutterBottom>
          Profile
        </Typography>
        {user ? (
          <>
            <Typography variant="h6" gutterBottom>
              Username: {user.username}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Email: user@example.com
            </Typography>
            {/* Tambahkan informasi lainnya sesuai kebutuhan */}
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              onClick={() => navigate("/edit-profile")}
            >
              Edit Profile
            </Button>
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
