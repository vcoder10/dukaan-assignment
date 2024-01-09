import React from "react";
import Table from "./Table";

const Transaction = () => {
  return (
    <div className="m-2 px-10">
      <div className=" flex">
        <h3 className="border border-gray-200 p-2 m-2">Transaction</h3>
        <h3 className="border border-gray-200 p-2 m-2">This Month</h3>
      </div>
      <div className="bg-white shadow-sm rounded-lg">
        <div className="flex justify-between p-2">
          <input
            placeholder="search by order"
            className=" border border-gray-200 rounded-lg w-1/4 px-2"
          />
          <div className="flex ">
            <h3 className="border border-gray-200 p-2 m-2">Sort</h3>
            <h3 className="border border-gray-200 p-2 m-2">D</h3>
          </div>
        </div>

        <div className="">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Transaction;
