import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage.tsx";
import DashboardPage from "../pages/dashboard/DashboardPage.tsx";
import { getToken } from "../utils/token.ts";

const ProtectedRoute = () => {
  const token = getToken();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/dashboard" replace />,
  },

  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
    ],
  },
]);

export default router;
