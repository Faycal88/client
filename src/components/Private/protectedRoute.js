import React from "react";
import { Navigate, useParams } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const user = localStorage.getItem("profile");
  const { role } = JSON.parse(user);
  console.log(role);
  if (role === "admin") {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export const PublicRoute = ({ children }) => {
  const user = localStorage.getItem("profile");
  if (user) {
    return <Navigate to="/profile" />;
  } else {
    return children;
  }
};

export const NeedLogin = ({ children }) => {
  const user = localStorage.getItem("profile");
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
