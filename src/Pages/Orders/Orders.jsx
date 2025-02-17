import React, { useEffect, useState } from "react";
import { deleteidcard, getSingle } from "../../api";
import _ from "lodash";
import { Template1, Template2, Template3 } from "../../Components/Id_Templates/id_templates";
import { Card, Divider, Spin } from "antd";
import { SUCCESS_NOTIFICATION } from "../../helper/notificationhelper";
import { ICONS_HELPER } from "../../helper/iconhelper";
import { data } from "autoprefixer";

const Orders = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      const result = await getSingle();
      const data = _.get(result, "data.data", "");
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = async (id) => {
    console.log(id);
    try {
      const result = await deleteidcard(id);
      fetchData();
      SUCCESS_NOTIFICATION(result);
    } catch (err) {
      console.log(err);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  console.log(data);
  return (
    <Spin spinning={loading}>
      <div className="flex items-center justify-center pt-5 font-bold text-primary text-[30px] pb-3">
        <h1>Orders</h1>
      </div>
      <div className="m-auto grid grid-cols-3 gap-5 place-items-center">
        {data
          .filter((item) => item.template === "Template 2")
          .map((item, index) => (
            <Card key={index} className=" rounded-lg shadow-lg relative bg-white">
              <Template2 {...item} />

              {/* Edit & Delete Icons */}
              <Divider />
              <div className="flex   items-center justify-between absolute bottom-2 left-3 right-3">
                <ICONS_HELPER.EDIT_ICON className="  cursor-pointer text-2xl " />
                <ICONS_HELPER.EYE_ICONS className="cursor-pointer text-2xl" />
                <ICONS_HELPER.DELTE_ICON onClick={() => handleClick(item._id)} className="cursor-pointer text-2xl" />
              </div>
            </Card>
          ))}
      </div>
      {/* Grid layout for odd-numbered templates */}
      {/* Divider before Template 2 section */}
      <Divider className="!my-5" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 place-items-center">
        {data
          .filter((item) => item.template !== "Template 2")
          .map((item, index) => (
            <Card key={index} className="w-full  rounded-lg items-center bg-transparent border-pink-400 border-[10px]">
              <div className="items-center justify-center pl-[70px]">
                {item.template === "Template 1" && <Template1 {...item} />}
                {item.template === "Template 3" && <Template3 {...item} />}
              </div>

              <Divider className="bg-red-500 border-2" />
              <div className="flex   items-center justify-around  absolute bottom-2 left-3 right-3 ">
                <ICONS_HELPER.EDIT_ICON className="  cursor-pointer text-2xl " />
                <ICONS_HELPER.EYE_ICONS className="cursor-pointer text-2xl" />
                <ICONS_HELPER.DELTE_ICON onClick={() => handleClick(item._id)} className="cursor-pointer text-2xl" />
              </div>
            </Card>
          ))}
      </div>
      {/* Full-width layout for Template 2 */}
    </Spin>
  );
};

export default Orders;
