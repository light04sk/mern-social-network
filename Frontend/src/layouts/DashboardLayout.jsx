import Navbar2 from "../components/Dashboard/Navbar2";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <>
      <Navbar2 />
      <Outlet />
    </>
  );
};

export default PublicLayout;
