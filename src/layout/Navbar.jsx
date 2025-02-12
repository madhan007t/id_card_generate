import { Link, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { navbarItems } from "../helper/datahelper";
import { checklogin } from "../api";
import { useDispatch } from "react-redux";
import { isLoginSuccess } from "../redux/Slice/authslice";
import _ from "lodash";
import { admintoken } from "../helper/notificationhelper";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);
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
    <div className=" bg-purple-50">
      <div className=" w-[100px] h-screen flex flex-col items-center py-4 space-y-6">
        {navbarItems.map((item) => {
          const isActive = activeItem === item.id;
          return (
            <Link key={item.id} to={item.to} onClick={() => setActiveItem(item.id)} className={`flex flex-col items-center w-full py-3 cursor-pointer rounded-lg ${isActive ? "bg-primary text-white" : "hover:bg-primary hover:text-white text-secondary"}`}>
              <h1 className="text-2xl">{<item.icon />}</h1>
              <span className="mt-2 text-sm font-semibold">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
