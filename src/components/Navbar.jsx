import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Menu,
  MenuItem,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { AuthService } from "../services/AuthService";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState, useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [saldo, setSaldo] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(saldo);

  useEffect(() => {
    const fetchSaldo = () => {
      const currentUser = AuthService.getCurrentUser();
      setSaldo(currentUser?.saldo || 0);
      setLoading(false);
    };

    fetchSaldo();

    const handleStorageChange = () => fetchSaldo();
    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, [navigate]);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    AuthService.logout();
    navigate("/login");
    handleClose();
  };

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ flexGrow: 1, color: "inherit", textDecoration: "none" }}
          >
            Movie Store
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          {AuthService.isAuthenticated() ? (
            <>
              <IconButton
                color="inherit"
                onClick={handleProfileClick}
                aria-controls="profile-menu"
                aria-haspopup="true"
              >
                <AccountCircleIcon />
              </IconButton>
              <Menu
                id="profile-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem disabled>
                  {loading ? (
                    <CircularProgress size={20} />
                  ) : (
                    `Saldo: Rp ${saldo.toLocaleString("id-ID")}`
                  )}
                </MenuItem>
                <MenuItem component={Link} to="/profile" onClick={handleClose}>
                  Profile
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
