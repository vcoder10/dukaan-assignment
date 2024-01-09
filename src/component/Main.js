import React from "react";
import Sidebar from "./Sidebar";
import Body from "./Body";

const Main = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Body />
    </div>
  );
};

export default Main;
