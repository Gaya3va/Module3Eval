import { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children, role }) => {
  const { auth } = useContext(AuthContext);
  const location = useLocation();

  useEffect(() => {
    if (!auth.isAuth) {
      alert("Please login first");
    }
  }, [auth.isAuth]);

  if (!auth.isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (role && auth.role !== role) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
