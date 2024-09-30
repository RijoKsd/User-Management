import { createBrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";
import CommonLayout from "./Layout/CommonLayout";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

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
]);

export default router;
