import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

function NotAuthRoute() {
  // eslint-disable-next-line no-unused-vars
  const { user, isAuthenticated } = useAuth();

  if (isAuthenticated) return <Navigate to="/profile" replace />;

  return <Outlet />;
}

export default NotAuthRoute;
