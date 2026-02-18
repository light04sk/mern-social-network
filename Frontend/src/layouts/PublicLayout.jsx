import Navbar1 from "../components/LandingPage/Navbar1";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <>
      <Navbar1 />
      <Outlet />
    </>
  );
};

export default PublicLayout;
