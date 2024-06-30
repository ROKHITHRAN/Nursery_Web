import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./context/AdminContext";
const PrivateRoute = ({ element: Component, ...rest }) => {
  const {auth} = useContext(AuthContext)
  const isAccepted = auth.isAuthenticated; // Replace this with your actual authentication logic

  return isAccepted ? <Component {...rest} /> : <Navigate to="/" />;
};

export default PrivateRoute;
