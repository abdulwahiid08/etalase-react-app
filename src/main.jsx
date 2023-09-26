// MODULE
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// ASSETS
import "./assets/css/index.css";
// VIEWS
import App from "./views/App";
import AuthLogin from "./views/pages/Auth/authLogin";
import AuthRegister from "./views/pages/Auth/authRegister";
import ErrorPage from "./views/pages/error/404";
import ProductPage from "./views/pages/Product";

// MENDEFINISIKAN ROUTER
const router = createBrowserRouter([
  {
    // Url path
    path: "/",
    // Element / view yang mau ditampilkan
    element: <AuthLogin />,
    errorElement: <ErrorPage />,
  },
  {
    // Url path
    path: "/register",
    // Element / view yang mau ditampilkan
    element: <AuthRegister />,
  },
  {
    path: "/product",
    element: <ProductPage />,
  },
]);

// ========= RENDER REACT DOM ==============
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Menampilkan halaman sesuia dengan path yang di akases */}
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
