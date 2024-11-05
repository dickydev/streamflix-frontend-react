import { Navigate } from "react-router-dom";
import { AuthService } from "../services/AuthService";

const ProtectedRoute = ({ children }) => {
  if (!AuthService.isAuthenticated()) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
