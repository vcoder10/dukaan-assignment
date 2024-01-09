import React from "react";
import Head from "./Head";
import Overview from "./Overview";
import Transaction from "./Transaction";

const Body = () => {
  return (
    <div className="w-full bg-gray-100">
      <Head />
      <Overview />
      <Transaction />
    </div>
  );
};

export default Body;
