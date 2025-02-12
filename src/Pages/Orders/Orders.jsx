import React, { useEffect, useState } from "react";
import { getSingle } from "../../api";
import _ from "lodash";
import { Template1, Template2 } from "../../Components/Id_Templates/id_templates";
import { Spin } from "antd";
import { SUCCESS_NOTIFICATION } from "../../helper/notificationhelper";

const Orders = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await getSingle();
      const result = _.get(response, "data.data", []);
      setData(result);
    } catch (err) {
      console.log(err);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Spin spinning={loading}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 place-items-center min-h-screen  bg-yellow-700">
        {data.map((item, index) => (
          <div key={index} className="w-full max-w-sm  rounded-lg p-5">
            {item.template === "Template 1" && <Template1 name={item.name} email={item.email} id_number={item.id_number} phone_no={item.phone_no} address={item.address} image={item.image} />}
            {item.template === "Template 2" && <Template2 name={item.name} email={item.email} id_number={item.id_number} phone_no={item.phone_no} address={item.address} image={item.image} position={""} />}
          </div>
        ))}
      </div>
    </Spin>
  );
};

export default Orders;
