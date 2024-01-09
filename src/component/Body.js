import React from "react";
import Head from "./Head";
import Overview from "./Overview";
import Transaction from "./Transaction";

const Body = () => {
  return (
    <div className="w-full">
      <Head />
      <Overview />
      <Transaction />
    </div>
  );
};

export default Body;
