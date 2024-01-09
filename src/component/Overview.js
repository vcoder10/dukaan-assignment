import React from "react";

const Overview = () => {
  return (
    <div className="border border-gray-200 h-48 m-2 py-2 px-10 flex flex-col text-lg ">
      <div className="flex justify-between mb-10">
        <h2>Overview</h2>
        <div>
          <span className="px-2">Last Month</span>
          <span>🔽</span>
        </div>
      </div>
      <div className="flex justify-between ">
        <div className="flex flex-col items-center">
          <h3>Online Order</h3>
          <h3> 231</h3>
        </div>
        <div className="flex flex-col items-center">
          <h3>Amount Recived</h3>
          <h3>Rs23000000</h3>
        </div>
      </div>
    </div>
  );
};

export default Overview;
