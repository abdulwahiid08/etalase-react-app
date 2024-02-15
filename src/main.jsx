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
import ProductPage from "./views/pages/product";
import { ProfilePage } from "./views/pages/profile";
import DetailProductPage from "./views/pages/detailProduct";
import { Provider } from "react-redux"; // PROVIDER REACT REDUX
import store from "./redux/store"; // STORE REACT REDUX
import Navbar from "./views/component/organisms/Navbar";

// MENDEFINISIKAN ROUTER
const router = createBrowserRouter([
  {
    // Url path
    path: "/",
    // Element / view yang mau ditampilkan
    element: <AuthLogin title="Login | My React App" />,
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
    element: <ProductPage title="Product | My React App" />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/product/:id",
    element: <DetailProductPage title="Detail Product | My React App" />,
  },
]);

// ========= RENDER REACT DOM ==============
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Redux */}
    <Provider store={store}>
      {/* <Navbar /> */}
      {/* Menampilkan halaman sesuai dengan path yang di akases */}
      <RouterProvider router={router} />
    </Provider>
    {/* <App /> */}
  </React.StrictMode>
);
