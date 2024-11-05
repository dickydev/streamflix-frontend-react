import { createContext, useContext, useState, useEffect } from "react";
import { AuthService } from "../services/AuthService";
import PropTypes from "prop-types";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await AuthService.getCurrentUser();
      setUser(currentUser);
    };
    fetchUser();
  }, []);

  const refreshUser = async () => {
    const updatedUser = await AuthService.getCurrentUser();
    setUser(updatedUser);
  };

  return (
    <UserContext.Provider value={{ user, refreshUser }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useUser = () => useContext(UserContext);
