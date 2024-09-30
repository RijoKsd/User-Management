import { createBrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";
import CommonLayout from "./Layout/CommonLayout";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import UserLayout from "./Layout/UserLayout";
import UserManagement from "./components/user/UserManagement";
import ProtectedRoute from "./components/common/ProtectedRoute";
import EditUserForm from "./components/user/EditUserForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CommonLayout />,
    children: [
      { path: "", element: <Hero /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    path: "/user",
    element: <ProtectedRoute />,
    children: [
      {
        element: <UserLayout />,
        children: [{ path: "", element: <UserManagement /> }],
      },
    ],
  },
]);

export default router;
