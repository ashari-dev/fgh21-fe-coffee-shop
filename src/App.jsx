import React from "react";
import Forgetpassword from "./pages/Forgetpassword";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import DashboardAdmin from "./pages/DashboardAdmin";


const router = createBrowserRouter([
  {
    path: "/Forgetpassword",
    element: <Forgetpassword />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/DashboardAdmin",
    element: <DashboardAdmin />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
