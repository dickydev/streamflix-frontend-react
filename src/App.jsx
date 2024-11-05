import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { CssBaseline, Box } from "@mui/material";
import ProfilePage from "./pages/ProfilePage";
import CartPage from "./pages/CartPage";
import PaymentPage from "./pages/PaymentPage";

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Navbar />
        <Box component="main" flexGrow={1}>
          <Routes>
            {/* Rute untuk register dan login */}
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />

            {/* Rute yang dilindungi untuk HomePage dan MovieDetailPage */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <CartPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/payment"
              element={
                <ProtectedRoute>
                  <PaymentPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/:movieId"
              element={
                <ProtectedRoute>
                  <MovieDetailPage />
                </ProtectedRoute>
              }
            />

            {/* Halaman 404 untuk rute yang tidak ditemukan */}
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </Box>
        <Footer sx={{ mt: "auto" }} />
      </Box>
    </Router>
  );
};

export default App;
