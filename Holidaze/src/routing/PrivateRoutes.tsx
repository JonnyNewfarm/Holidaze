import { Navigate, Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const PrivateRoutes = () => {
  const token = localStorage.getItem("accessToken");

  if (token === null) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <NavBar />
      <div>
        <Outlet />
      </div>

      <Footer />
    </>
  );
};
