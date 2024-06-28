import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import { Suspense } from "react";

const Layout = () => {
  const location = useLocation();
  const showHeader = location.pathname === "/dashboard";

  return (
    <div>
      {showHeader && <Header />}
      <main>
        <Suspense fallback="loading... " />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
