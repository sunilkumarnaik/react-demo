import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLogin = sessionStorage.getItem("isLogin");
  if (isLogin !== "true") {
    return <Navigate to="/signin" />;
  }
  return children;
};

export default ProtectedRoute;
