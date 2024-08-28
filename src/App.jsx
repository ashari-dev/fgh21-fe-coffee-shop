import React from "react";
import Forgetpassword from "./pages/Forgetpassword";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailOrder from "./pages/DetailOrder";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserList from "./pages/UserList";
import HomePage from "./pages/HomePage";
import DashboardAdmin from "./pages/DashboardAdmin";
import Profile from "./pages/Profile";


const router = createBrowserRouter([
  {
    path: "/forget-password",
    element: <Forgetpassword />,
  },
  {
      path: "/detail-order",
      element: <DetailOrder />,
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
    path: "/userList",
    element: <UserList />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/DashboardAdmin",
    element: <DashboardAdmin />,
  },
  {
    path: "/list-user",
    element: <UserList />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
