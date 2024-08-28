import React from "react";
// import Forgetpassword from "./pages/Forgetpassword";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import EditProduct from "./pages/EditProduct";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  // {
  //   path: "/forget-password",
  //   element: <Forgetpassword />,
  // },
  // {
  //   path: "/EditProduct",
  //   element: <EditProduct />,
  // },
  {
    path: "/",
    element: <HomePage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
