import { Button } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isLoginSuccess } from "../redux/Slice/authslice";
import _ from "lodash";
import { IoMdLogOut } from "react-icons/io";

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
    <div className="w-full bg-secondary text-white h-16 flex items-center justify-between px-4">
      <div className="text-lg font-bold">
        <h1 className="bg-white text-black px-10  py-2 ml-10 ">Logo</h1>
      </div>

      <div className="flex items-center ">
        {userName ? (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded-full">{userInitial}</div>
            <span className="text-white font-bold">{userName}</span>
            <Button onClick={handleLogout} className="bg-primary text-white p-4 font-bold">
              <IoMdLogOut />
              Logout
            </Button>
          </div>
        ) : (
          <>
            <div className="flex gap-4">
              <Button onClick={() => navigate("/login")} className="px-4 rounded-lg font-bold">
                Login
              </Button>
              <Button onClick={() => navigate("/register")} className="px-4 rounded-lg font-bold">
                Sign Up
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TopNavbar;
