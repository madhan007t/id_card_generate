import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopNavbar from "./TopNavabar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <TopNavbar />

      <div className="flex flex-1">
        <Navbar />

        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
