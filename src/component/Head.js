import React from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Button from "@mui/material/Button";

const Head = () => {
  return (
    <div className="flex w-full justify-between items-center p-2 bg-white">
      <div>
        <span className="px-2">Payments</span>
        <span className="">
          <Button
            startIcon={<HelpOutlineIcon />}
            style={{ color: "black", textTransform: "none" }}
          >
            How it work
          </Button>
        </span>
      </div>
      <input
        placeholder="search features, tutorial etc"
        className="p-2 border border-gray-200 rounded-lg w-2/5"
      />
      <div>
        <span className="px-2">📢</span>
        <span className="px-2">🔽</span>
      </div>
    </div>
  );
};

export default Head;
