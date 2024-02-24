import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Login } from "./Login";
import ProductDetails from "./ProductDetails";
import { Register } from "./Register";
import { Layout } from "./Layout";
import { ErrorPage } from "./ErrorPage";
import { PrivateRoutes } from "./PrivateRoutes";
import ProfilePage from "./ProfilePage";
import { Mybookings } from "./Mybookings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> },
      { path: "profile", element: <ProfilePage /> },

      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    element: <PrivateRoutes />,
    children: [
      { path: "product/:id", element: <ProductDetails /> },
      { path: "mybookings/:id", element: <Mybookings /> },
    ],
  },
]);
export default router;
