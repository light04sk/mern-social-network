import Footer from "../components/Footer";
import Navbar2 from "../components/Navbar2";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <>
      <Navbar2 />
      <Outlet />
      <Footer />
    </>
  );
};

export default PublicLayout;
