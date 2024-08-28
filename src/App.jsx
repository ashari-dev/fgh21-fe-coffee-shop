import React from "react";
import Forgetpassword from "./pages/Forgetpassword";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserList from "./pages/UserList";
import HomePage from "./pages/HomePage";

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
    path: "/userList",
    element: <UserList />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
