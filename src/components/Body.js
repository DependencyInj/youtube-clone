import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import ButtonList from "./ButtonList";

const Body = () => {
  return (
    <div className="flex flex-col">
      <div className="">
        <Header />
        <div className="flex">
          <div className="flex">
            <SideBar />
            <div>
              <ButtonList />
              <div className="overflow-scroll">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
