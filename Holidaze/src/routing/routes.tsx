import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <About /> },
  { path: "/login", element: <About /> },
  { path: "/register", element: <About /> },
]);
export default router;
