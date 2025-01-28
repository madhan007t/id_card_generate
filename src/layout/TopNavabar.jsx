import { Button } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isLoginSuccess } from "../redux/Slice/authslice";
import _ from "lodash";

const TopNavbar = () => {
  const user = useSelector((state) => state.authSlice);
  const userName = _.get(user, "user.name");

  const userInitial = userName ? userName.charAt(0).toUpperCase() : " ";
  console.log(userInitial);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    dispatch(isLoginSuccess({}));
    navigate("/");
  };

  return (
    <div className="w-full bg-purple-500 text-white h-16 flex items-center justify-between px-4">
      <div className="text-lg font-bold">
        <h1 className="bg-white text-black p-2 ml-10">Logo</h1>
      </div>

      <div className="flex items-center space-x-4">
        {userName ? (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full">{userInitial}</div>
            <span className="text-white font-bold">{userName}</span>
            <Button onClick={handleLogout} className="bg-red-500 text-white px-4 rounded-lg font-bold">
              Logout
            </Button>
          </div>
        ) : (
          <>
            <Button onClick={() => navigate("/login")} className="px-4 rounded-lg font-bold">
              Login
            </Button>
            <Button onClick={() => navigate("/register")} className="px-4 rounded-lg font-bold">
              Sign Up
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default TopNavbar;
