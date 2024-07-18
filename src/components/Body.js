import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Body = () => {
  return (
    <div class="flex flex-wrap">
      <div class="w-[90%]">
        <div className="sticky-top top-0">
          <Header />
        </div>
        <div class="w-[10%] h-screen">
          <div className="flex">
            <div>
              <SideBar />
            </div>
            <div className="w-full">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
