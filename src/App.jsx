import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditProduct from "./pages/EditProduct";
import ChatAdmin from "./pages/ChatAdmin";

const router = createBrowserRouter([
  {
    path: "/EditProduct",
    element: <EditProduct />,
    path: "/chat",
    element: <ChatAdmin />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
