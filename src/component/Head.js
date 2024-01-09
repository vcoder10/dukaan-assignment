import React from "react";

const Head = () => {
  return (
    <div className="flex w-full justify-between items-center p-2 bg-white">
      <div>
        <span className="px-2">Payments</span>
        <span className="px-2">? How it work</span>
      </div>
      <input
        placeholder="search features, tutorial etc"
        className="p-2 border border-gray-200 rounded-lg w-1/4"
      />
      <div>
        <span className="px-2">📢</span>
        <span className="px-2">🔽</span>
      </div>
    </div>
  );
};

export default Head;
