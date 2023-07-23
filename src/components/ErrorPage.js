import React from "react";
import { Navigate } from "react-router-dom";

const ErrorPage = () => {
  //   return <h1>Oops !!! Wrong Route</h1>;
  return <Navigate to="/" />;
};

export default ErrorPage;
