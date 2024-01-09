import React from "react";
import logo from "../images/nissan logo.jpg";
const Sidebar = () => {
  return (
    <div className="w-1/6 bg-gray-700 h-scroll flex flex-col text-white pt-4">
      <div className="flex flex-col justify-end">
        <div className="flex px-2">
          <img className="w-12 h-12" alt="logo" src={logo} />
          <div className="flex items-center">
            <div className="flex flex-col ml-2 mr-12">
              <h3 className="font-bold">Nishyan</h3>
              <p className="underline">visit More</p>
            </div>
            <div>🔽</div>
          </div>
        </div>
        <div className="flex flex-col mt-8 pl-2">
          <div className="flex my-2 text-lg hover:bg-gray-600 rounded-lg mr-2 px-2">
            <h3 className="pl-2">Home</h3>
          </div>
          <div className="flex my-2 text-lg hover:bg-gray-600 rounded-lg mr-2 px-2">
            <h3 className="pl-2">Order</h3>
          </div>
          <div className="flex my-2 text-lg hover:bg-gray-600 rounded-lg mr-2 px-2">
            <h3 className="pl-2">Products</h3>
          </div>
          <div className="flex my-2 text-lg hover:bg-gray-600 rounded-lg mr-2 px-2">
            <h3 className="pl-2">Delivery</h3>
          </div>
          <div className="flex my-2 text-lg hover:bg-gray-600 rounded-lg mr-2 px-2">
            <h3 className="pl-2">Marketing</h3>
          </div>
          <div className="flex my-2 text-lg hover:bg-gray-600 rounded-lg mr-2 px-2">
            <h3 className="pl-2">Analytics</h3>
          </div>
          <div className="flex my-2 text-lg hover:bg-gray-600 rounded-lg mr-2 px-2">
            <h3 className="pl-2">Payments</h3>
          </div>
          <div className="flex my-2 text-lg hover:bg-gray-600 rounded-lg mr-2 px-2">
            <h3 className="pl-2">Tools</h3>
          </div>
          <div className="flex my-2 text-lg hover:bg-gray-600 rounded-lg mr-2 px-2">
            <h3 className="pl-2">Delivery</h3>
          </div>
          <div className="flex my-2 text-lg hover:bg-gray-600 rounded-lg mr-2 px-2">
            <h3 className="pl-2">Marketing</h3>
          </div>
          <div className="flex my-2 text-lg hover:bg-gray-600 rounded-lg mr-2 px-2">
            <h3 className="pl-2">Analytics</h3>
          </div>
          <div className="flex my-2 text-lg hover:bg-gray-600 rounded-lg mr-2 px-2">
            <h3 className="pl-2">Payments</h3>
          </div>
          <div className="flex my-2 text-lg hover:bg-gray-600 rounded-lg mr-2 px-2">
            <h3 className="pl-2">Tools</h3>
          </div>
        </div>
        {/* <div className="border border-gray-200 rounded-lg">
          <h3>223</h3>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
