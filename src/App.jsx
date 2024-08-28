import React from "react";
import Forgetpassword from "./pages/Forgetpassword";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditProduct from "./pages/EditProduct";

const router = createBrowserRouter([
  {
    path: "/Forgetpassword",
    element: <Forgetpassword />,
  },
  {
    path: "/EditProduct",
    element: <EditProduct />,

  },
]);

function App() {
  return <RouterProvider router={router}/>
}

export default App;
