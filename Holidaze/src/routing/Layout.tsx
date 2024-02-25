import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import "../App.css";

export const Layout = () => {
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
