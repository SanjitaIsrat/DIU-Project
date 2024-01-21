import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useSelector((state) => state.user);
  const history = useNavigate();

  return (
    <div>{isAuthenticated ? children : !loading && history("/login")}</div>
  );
};

export default ProtectedRoute;
