import React from "react";

const Overview = () => {
  return (
    <div className=" h-36 mt-2 px-10 flex flex-col text-lg ">
      <div className="flex justify-between mb-4">
        <h2>Overview</h2>
        <div>
          <span className="px-2">Last Month</span>
          <span>🔽</span>
        </div>
      </div>
      <div className="flex justify-between  ">
        <div className="flex flex-col  bg-white rounded-lg shadow-sm w-1/4 h-24 pl-2">
          <h3>Online Order</h3>
          <h3 className="font-bold text-xl"> 231</h3>
        </div>
        <div className="flex flex-col  bg-white rounded-lg shadow-sm w-1/4 h-24 pl-2">
          <h3>Amount Recived</h3>
          <h3 className="font-bold text-xl">Rs 23,92,312.19</h3>
        </div>
      </div>
    </div>
  );
};

export default Overview;
