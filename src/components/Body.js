import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import ButtonList from "./ButtonList";

const Body = () => {
  return (
    <div className="flex flex-col">
      <div className="sticky top-0">
        <Header />
      </div>
      <div className="flex">
        <div className="top-[50]">
          <SideBar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Body;
