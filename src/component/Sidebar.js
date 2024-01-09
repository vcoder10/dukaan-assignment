import React from "react";
import logo from "../images/nishyan.webp";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import StorefrontIcon from "@mui/icons-material/Storefront";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
//import MarketingIcon from "@mui/icons-material/Marketing";
import BarChartIcon from "@mui/icons-material/BarChart";
import PaymentIcon from "@mui/icons-material/Payment";
import BuildIcon from "@mui/icons-material/Build";
import StorefrontSharpIcon from "@mui/icons-material/StorefrontSharp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DiscountIcon from "@mui/icons-material/Discount";
import PeopleIcon from "@mui/icons-material/People";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import ExtensionIcon from "@mui/icons-material/Extension";
const Sidebar = () => {
  return (
    <div className="w-1/6 bg-gray-700 h-scroll flex flex-col text-white pt-4">
      <div className="flex flex-col justify-end">
        <div className="flex px-2">
          <img className="w-12 h-12 rounded-lg" alt="logo" src={logo} />
          <div className="flex items-center">
            <div className="flex flex-col ml-2 mr-2">
              <h3 className="font-bold">Nishyan</h3>
              <p className="underline">visit More</p>
            </div>
            <Button
              startIcon={<ExpandMoreIcon />}
              style={{ color: "white" }}
            ></Button>
          </div>
        </div>
        <div className="flex flex-col mt-8 pl-2">
          <div className="flex my-2 text-lg hover:bg-gray-600 rounded-lg mr-2 px-2">
            <Button
              variant="text"
              startIcon={<HomeIcon />}
              className="pl-2"
              style={{ color: "white" }}
            >
              Home
            </Button>
          </div>
          <div className="flex my-2 text-lg hover:bg-gray-600 rounded-lg mr-2 px-2">
            <Button
              variant="text"
              startIcon={<AssignmentIcon />}
              className="pl-2"
              style={{ color: "white" }}
            >
              Order
            </Button>
          </div>
          <div className="flex my-2 text-lg hover:bg-gray-600 rounded-lg mr-2 px-2">
            <Button
              variant="text"
              startIcon={<StorefrontIcon />}
              className="pl-2"
              style={{ color: "white" }}
            >
              Products
            </Button>
          </div>
          <div className="flex my-2 text-lg hover:bg-gray-600 rounded-lg mr-2 px-2">
            <Button
              variant="text"
              startIcon={<LocalShippingIcon />}
              className="pl-2"
              style={{ color: "white" }}
            >
              Delivery
            </Button>
          </div>
          <div className="flex my-2 text-lg hover:bg-gray-600 rounded-lg mr-2 px-2">
            <Button
              variant="text"
              startIcon={<StorefrontSharpIcon />}
              className="pl-2"
              style={{ color: "white" }}
            >
              Marketing
            </Button>
          </div>
          <div className="flex my-2 text-lg hover:bg-gray-600 rounded-lg mr-2 px-2">
            <Button
              variant="text"
              startIcon={<BarChartIcon />}
              className="pl-2"
              style={{ color: "white" }}
            >
              Analytics
            </Button>
          </div>
          <div className="flex my-2 text-lg hover:bg-gray-600 rounded-lg mr-2 px-2">
            <Button
              variant="text"
              startIcon={<PaymentIcon />}
              className="pl-2"
              style={{ color: "white" }}
            >
              Payments
            </Button>
          </div>
          <div className="flex my-2 text-lg hover:bg-gray-600 rounded-lg mr-2 px-2">
            <Button
              variant="text"
              startIcon={<BuildIcon />}
              className="pl-2"
              style={{ color: "white" }}
            >
              Tools
            </Button>
          </div>
          <div className="flex my-2 text-lg hover:bg-gray-600 rounded-lg mr-2 px-2">
            <Button
              variant="text"
              startIcon={<DiscountIcon />}
              className="pl-2"
              style={{ color: "white" }}
            >
              Discounts
            </Button>
          </div>
          <div className="flex my-2 text-lg hover:bg-gray-600 rounded-lg mr-2 px-2">
            <Button
              variant="text"
              startIcon={<PeopleIcon />}
              className="pl-2"
              style={{ color: "white" }}
            >
              Audiences
            </Button>
          </div>
          <div className="flex my-2 text-lg hover:bg-gray-600 rounded-lg mr-2 px-2">
            <Button
              variant="text"
              startIcon={<MovieCreationIcon />}
              className="pl-2"
              style={{ color: "white" }}
            >
              Apperance
            </Button>
          </div>
          <div className="flex my-2 text-lg hover:bg-gray-600 rounded-lg mr-2 px-2">
            <Button
              variant="text"
              startIcon={<ExtensionIcon />}
              className="pl-2"
              style={{ color: "white" }}
            >
              Pluggins
            </Button>
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
