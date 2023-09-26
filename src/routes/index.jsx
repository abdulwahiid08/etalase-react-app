import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLogin from "../views/pages/Auth/authLogin";
import AuthRegister from "../views/pages/Auth/authRegister";

// MENDEFINISIKAN ROUTER
const router = createBrowserRouter([
  {
    // Url path
    path: "/",
    // Element / view yang mau ditampilkan
    element: <AuthLogin />,
  },
  {
    // Url path
    path: "/register",
    // Element / view yang mau ditampilkan
    element: <AuthRegister />,
  },
]);

export default { router, RouterProvider };
