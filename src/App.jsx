import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CssBaseline } from "@mui/material";

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:movieId" element={<MovieDetailPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
