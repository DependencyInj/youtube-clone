import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import homeSvg from "../assets/images/svg/home.svg";
import shortsSvg from "../assets/images/svg/shorts.svg";
import subWhite from "../assets/images/svg/subscriptions-white.svg";
import youWhite from "../assets/images/svg/you-white.svg";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.nav.isMenuOpen);

  return (
    <aside
      className={`shadow-2xl p-1 ${
        isMenuOpen ? "w-[150px]" : "w-[100px]"
      } child:pt-2 text-[10px] h-screen sticky top-[20px]`}
    >
      <div>
        <ul>
          <Link to={"/"}>
            <li
              className={`flex ${
                isMenuOpen ? "justify-start" : "justify-center"
              } align-middle py-8 px-5 hover:bg-slate-200 hover:rounded-lg hover:cursor-pointer`}
            >
              <div
                className={`flex ${isMenuOpen ? "flex-row" : "flex-col"} gap-2`}
              >
                <img
                  alt="home"
                  className="ml-auto mr-auto w-[24px] h-[24px]"
                  src={homeSvg}
                />
                <span className="text-[16px]">Home</span>
              </div>
            </li>
          </Link>
          <li
            className={`flex ${
              isMenuOpen ? "justify-start" : "justify-center"
            } align-middle py-8 px-5 hover:bg-slate-200 hover:rounded-lg hover:cursor-pointer`}
          >
            <div
              className={`flex ${isMenuOpen ? "flex-row" : "flex-col"} gap-2`}
            >
              <img
                alt="home"
                className="ml-auto mr-auto w-[24px] h-[24px]"
                src={shortsSvg}
              />
              <span className="text-[13px]">Shorts</span>
            </div>
          </li>
          <li
            className={`flex ${
              isMenuOpen ? "justify-start" : "justify-center"
            } align-middle py-8 px-5 hover:bg-slate-200 hover:rounded-lg hover:cursor-pointer`}
          >
            <div
              className={`flex ${isMenuOpen ? "flex-row" : "flex-col"} gap-2`}
            >
              <img
                alt="home"
                className="ml-auto mr-auto w-[24px] h-[24px]"
                src={subWhite}
              />
              <span className="text-[13px]">Subscriptions</span>
            </div>
          </li>
          <li
            className={`flex ${
              isMenuOpen ? "justify-start" : "justify-center"
            } align-middle py-8 px-5 hover:bg-slate-200 hover:rounded-lg hover:cursor-pointer`}
          >
            <div
              className={`flex ${isMenuOpen ? "flex-row" : "flex-col"} gap-2`}
            >
              <img
                alt="home"
                className="ml-auto mr-auto w-[24px] h-[24px]"
                src={youWhite}
              />
              <span className="text-[13px]">You</span>
            </div>
          </li>
        </ul>
      </div>
      {isMenuOpen && (
        <div>
          <div>
            <hr className="bg-slate-500" />
          </div>
          <div>
            <h2 className="font-bold">Subscriptions</h2>
            <ul>
              <li>Trending</li>
              <li>Shopping</li>
              <li>Music</li>
              <li>Films</li>
            </ul>
          </div>
          <div>
            <hr className="bg-slate-500" />
          </div>
          <div>
            <h2 className="font-bold">Explore</h2>
            <ul>
              <li>Trending</li>
              <li>Shopping</li>
              <li>Music</li>
              <li>Films</li>
            </ul>
          </div>
        </div>
      )}
    </aside>
  );
};

export default SideBar;
