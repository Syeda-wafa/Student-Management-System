import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";

function MainLayout() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" && <Navbar />}

      <Outlet />
    </>
  );
}

export default MainLayout;
