import { Link } from "react-router-dom";

import { useState } from "react";
import { navbarItems } from "../helper/datahelper";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);

  console.log(navbarItems);

  return (
    <div className="bg-purple-50 w-[100px] h-screen flex flex-col items-center py-4 space-y-6">
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
  );
};

export default Navbar;
