import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditProduct from "./pages/EditProduct";

const router = createBrowserRouter([
  {
    path: "/EditProduct",
    element: <EditProduct />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
