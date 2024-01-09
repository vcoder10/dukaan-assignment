import React from "react";
import Table from "./Table";

const Transaction = () => {
  return (
    <div className="m-2 px-10">
      <div className=" flex">
        <h3 className="font-bold  m-2">Transaction | </h3>
        <h3 className="font-bold my-2 ">This Month</h3>
      </div>
      <div className="bg-white shadow-sm rounded-lg">
        <div className="flex justify-between p-2">
          <input
            placeholder="search by order"
            className=" border border-gray-200 rounded-lg w-1/4 px-2"
          />
          <div className="flex ">
            <h3 className="border border-gray-200 rounded-lg py-1 px-2 mx-2">
              Sort
            </h3>
            <h3 className="border border-gray-200 rounded-lg py-1 px-2 ">D</h3>
          </div>
        </div>

        <div className="mb-10">
          <Table />
          <div className="flex justify-evenly py-4">
            <div>
              <button className="py-1 px-2 border border-gray-200 rounded-lg hover:bg-gray-400">
                {" "}
                Previous
              </button>
            </div>
            <div>
              <p>1 .... 10 11 12 13 14 15 16 17 18</p>
            </div>
            <div>
              <button className="py-1 px-2 border border-gray-200 rounded-lg hover:bg-gray-400">
                Next{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
