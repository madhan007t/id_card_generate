import React from "react";

const Home = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Recent Templates Section */}
      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <h1 className="text-xl font-bold text-gray-700">Recent Templates</h1>
      </div>

      {/* Your Order Section */}
      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <h1 className="text-xl font-bold text-gray-700">Your Order</h1>
      </div>

      {/* Templates Section */}
      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <h1 className="text-xl font-bold text-gray-700">Templates</h1>
      </div>
    </div>
  );
};

export default Home;
