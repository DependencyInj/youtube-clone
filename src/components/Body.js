import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import ButtonList from "./ButtonList";

const Body = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <div className="fixed inline-block bg-white">
          <SideBar />
        </div>
        <div className="ml-[7%]">
          <div className="fixed w-full bg-white">
            <ButtonList />
          </div>
          <div className="mt-[3%]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
