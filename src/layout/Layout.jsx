import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopNavbar from "./TopNavabar";
import { Outlet, useNavigate } from "react-router-dom";
import { checklogin } from "../api";
import { useDispatch } from "react-redux";
import { isLoginSuccess } from "../redux/Slice/authslice";
import { admintoken } from "../helper/notificationhelper";
import _ from "lodash";

const Layout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const result = await checklogin();
        const data = _.get(result, "data.data", "");

        if (_.isEmpty(data)) {
          localStorage.removeItem(admintoken);
          navigate("/"); // Redirect if not logged in
        } else {
          dispatch(isLoginSuccess(data)); // Set login state
        }
      } catch (err) {
        console.error("Login check failed:", err);
      }
    };

    fetchdata();
  }, [navigate, dispatch]); // Added dependencies to prevent unwanted re-renders

  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="sticky top-0 z-50">
        <TopNavbar />
      </div>

      <div className="flex flex-1 overflow-visible">
        <div className="sticky top-[65px] z-50 h-[60px] bg-white shadow-md">
          <Navbar />
        </div>

        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
