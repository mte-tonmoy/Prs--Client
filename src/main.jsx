import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AddProduct from "./Components/AddProduct.jsx";
import Signin from "./Components/Signin.jsx";
import Profile from "./Components/Profile";
import SignUp from "./Components/SignUp.jsx";
import Request from "./Components/Request";
import AuthProvider from "./AuthContext/AuthProvider.jsx";
import NavBar from "./Components/NavBar.jsx";
import Admin from "./Components/Admin/Admin.jsx";
import Requisition from "./Components/Requisition.jsx";
import AdminRoute from './Routes/AdminRoute';
import PrivateRoute from './Routes/PrivateRoute';
import StoreManRoute from "./Routes/StoreManRoute.jsx";
import EmployeeRoute from "./Routes/EmployeeRoute.jsx";
import ManagerRoute from './Routes/ManagerRoute';
import Home from "./Components/Home.jsx";
import AddPr from "./Components/Storeman/AddPr.jsx";
import MyRequest from "./Components/User/MyRequest.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/addProduct",
        element: (
          <StoreManRoute>
            <AddProduct />
          </StoreManRoute>
        ),
      },
      {
        path: "/addPr",
        element: (
          <StoreManRoute>
            <AddPr></AddPr>
          </StoreManRoute>
        ),
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/myRequest",
        element: (
          <EmployeeRoute>
            <MyRequest></MyRequest>
          </EmployeeRoute>
        ),
      },
      {
        path: "/request",
        element: (
          <EmployeeRoute>
            <Request></Request>
          </EmployeeRoute>
        ),
      },
      {
        path: "/navbar",
        element: <NavBar />,
      },
      {
        path: "/admin",
        element: (
          <AdminRoute>
            <Admin></Admin>
          </AdminRoute>
        ),
      },
      {
        path: "/requisition",
        element: (
          <ManagerRoute>
            <Requisition></Requisition>
          </ManagerRoute>
        ),
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
