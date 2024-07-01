import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import { Suspense } from "react";
import Loader from "./Loader";
import styled from "styled-components";

const Layout = () => {
  const location = useLocation();
  const showHeader = location.pathname === "/dashboard";

  return (
    <Box>
      {showHeader && <Header />}
      <main>
        <Suspense fallback={<Loader />} />
        <Outlet />
      </main>
    </Box>
  );
};

const Box = styled.div`
  margin-inline: auto;
`;

export default Layout;
