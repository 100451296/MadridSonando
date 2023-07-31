import { useAuth } from "../context/AuthContext"
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
    // eslint-disable-next-line no-unused-vars
    const {user, isAuthenticated} = useAuth();

    if (!isAuthenticated) return <Navigate to='/login' replace />

  return <Outlet />
}

export default ProtectedRoute