import React from "react";
import Forgetpassword from "./pages/Forgetpassword";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailOrder from "./pages/DetailOrder";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserList from "./pages/UserList";
import HomePage from "./pages/HomePage";
import OrderList from "./pages/OrderList";
import DashboardAdmin from "./pages/DashboardAdmin";
import Profile from "./pages/Profile";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import DetailProduct from "./pages/DetailProduct";
import Payment from "./pages/Payment";
import HistoryOrder from "./pages/HistoryOrder"
import Try from "./pages/Try"

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
    path: "/orderList",
    element: <OrderList />,
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
  {
    path: "/list-product",
    element: <ProductList />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/detail-product",
    element: <DetailProduct />,
  },
  {
    path: "/payment-detail",
    element: <Payment />,
  },
  {
    path: "/history-order",
    element: <HistoryOrder />,
  },
  {
    path: "/try",
    element: <Try />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
