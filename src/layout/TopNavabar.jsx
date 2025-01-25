import { Button } from "antd";
import React from "react";

const TopNavbar = () => {
  return (
    <div className="w-full bg-purple-500 text-white h-16 flex items-center justify-between px-4">
      <div className="text-lg font-bold">
        <img src="https://static.canva.com/web/images/8439b51bb7a19f6e65ce1064bc37c197.svg" />
      </div>
      <div className="flex items-center space-x-4">
        <Button href="/login" className=" px-4  rounded-lg font-bold">
          Login
        </Button>
        <Button href="/register" className=" px-4  rounded-lg font-bold">
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default TopNavbar;
