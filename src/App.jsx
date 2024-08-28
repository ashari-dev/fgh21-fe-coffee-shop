import React from "react";
import Forgetpassword from "./pages/Forgetpassword";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditProduct from "./pages/EditProduct";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/Forgetpassword",
    element: <Forgetpassword />,
  },
  {
    path: "/EditProduct",
    element: <EditProduct />,
  },
  {
  path: "/register",
  element: <Register />,
  },
]);

function App() {
  return <RouterProvider router={router}/>
}

export default App;
