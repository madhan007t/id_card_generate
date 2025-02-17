import React, { useState } from "react";
import { Collapse, Modal } from "antd";
import { templates } from "../../helper/datahelper";
import Single from "../Single/Single";
import Orders from "../Orders/Orders";

const Home = () => {
  const { Panel } = Collapse;

  return (
    <div className="p-6 space-y-6">
      {/* Recent Templates Section */}
      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <h1 className="text-xl font-bold text-gray-700">Recent Templates</h1>
      </div>
      {/* Your Order Section */}
      <Collapse defaultActiveKey={["1"]} accordion>
        <Panel header="Your Order" key="1" className="font-bold">
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <Orders />
          </div>
        </Panel>
      </Collapse>
      {/* Templates Section */}
      <Collapse defaultActiveKey={["1"]} accordion className="font-bold">
        <Panel header="Templates" key="1">
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <Single />
          </div>
        </Panel>
      </Collapse>
    </div>
  );
};

export default Home;
