import { Navigate } from "react-router-dom";
import { AuthService } from "../services/AuthService";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children }) => {
  if (!AuthService.isAuthenticated()) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
