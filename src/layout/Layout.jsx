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

  const fetchdata = async () => {
    try {
      const result = await checklogin();
      const data = _.get(result, "data.data", "");
      dispatch(isLoginSuccess(data));
      if (_.isEmpty(data)) {
        localStorage.removeItem(admintoken);
        return navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

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
