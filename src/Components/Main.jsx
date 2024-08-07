import React from "react";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { BsBagCheckFill, BsBagXFill } from "react-icons/bs";
import { RiCoinsFill } from "react-icons/ri";
import { BsBank2 } from "react-icons/bs";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Activity from "./Activity";
import RecentOrder from "./RecentOrder";
import Customerfeedback from "./Customerfeedback";
import "./Styles/nav.css";
import './Styles/main.css'

const Main = () => {
  return (
    <>
      <div className="w-full bg-gray-900 font-poppins px-6">
        <h1 className="dashboard-text text-white text-3xl py-2 font-semibold">Dashboard</h1>
        <div className="whole-container flex items-center justify-between gap-5">
          <div className="menu-container min-w-[57.5%] min-h-fit flex items-center justify-center gap-3">
            <div className="total-order min-w-[170px] h-[120px] px-3 p-2 bg-gray-700 rounded-md hover:bg-gray-600 ">
              <div className="w-10 h-9 rounded-lg bg-blue-600 flex items-center justify-center">
                <BsBank2 className="text-2xl text-blue-900" />
              </div>
              <p className="text-xs my-2 text-white">Total Orders</p>
              <div className="text flex items-center justify-between">
                <p id="total-text" className="total-text text-3xl font-semibold text-white">75</p>
                <p className="flex gap-1 items-center  text-green-500 ">
                  <span>
                    <IoMdArrowDropup className="text-green-500" />
                  </span>
                  3%
                </p>
              </div>
            </div>
            <div className=" min-w-[170px] h-[120px] px-3 p-2 bg-gray-700 rounded-md hover:bg-gray-600">
              <div className="w-10 h-9 rounded-lg bg-green-600 flex items-center justify-center">
                <BsBagCheckFill className="text-2xl text-green-900" />
              </div>
              <p className="text-xs my-2 text-white">Total Delivered</p>
              <div className="text flex items-center justify-between">
                <p id="total-text" className="total-text text-3xl font-semibold text-white">70</p>
                <p className="flex gap-1 items-center text-red-500 ">
                  <span>
                    <IoMdArrowDropdown className="text-red-700" />
                  </span>
                  3%
                </p>
              </div>
            </div>
            <div className=" min-w-[170px] h-[120px] px-3 p-2 bg-gray-700 rounded-md hover:bg-gray-600">
              <div className="w-10 h-9 rounded-lg bg-red-600 flex items-center justify-center">
                <BsBagXFill className="text-2xl text-red-900" />
              </div>
              <p className=" text-xs my-2 text-white">Total Cancelled</p>
              <div className="total-text text flex items-center justify-between">
                <p id="total-text" className="total-text text-3xl font-semibold text-white">05</p>
                <p className="flex gap-1 items-center text-green-500 ">
                  <span>
                    <IoMdArrowDropup className="text-green-500" />
                  </span>
                  3%
                </p>
              </div>
            </div>
            <div className=" min-w-[172px] h-[120px] px-3 p-2 bg-gray-700 rounded-md hover:bg-gray-600">
              <div className="w-10 h-9 rounded-lg bg-purple-600 flex items-center justify-center">
                <RiCoinsFill className="text-2xl text-purple-900" />
              </div>
              <p className="text-xs my-2 text-white">Total Revenue</p>
              <div className=" flex items-center justify-between">
                <p id="total-text" className="total-text text-3xl font-semibold text-white">$12k</p>
                <p className="flex gap-1 items-center text-red-500 ">
                  <span>
                    <IoMdArrowDropdown className="text-red-700" />
                  </span>
                  3%
                </p>
              </div>
            </div>
          </div>
          
          <div className="circle-section min-w-[41.5%] min-h-[120px] rounded-md bg-gray-700 flex items-start justify-between py-2 px-4 hover:bg-gray-600">
            <div className="">
              <div className="text-xs py-3 text-white">Net profit</div>
              <div className="w-fit">
                {" "}
                <h1 className="circle-sec-text w-fit text-xl font-semibold text-white">
                  $ 6759.25
                </h1>
                <p className="flex gap-1 items-center text-green-500 ">
                  <span>
                    <IoMdArrowDropup className="text-green-500" />
                  </span>
                  3%
                </p>
              </div>
            </div>
            <div className="w-[90px] h-10 mx-5 p-2">
              <CircularProgressbar
                value={70}
                text={`${70}%`}
                styles={buildStyles({
                  textColor: "#fff",
                  pathColor: `#6366f1`,
                  trailColor: "#2d3748",
                  textSize: "24px",
                })}
              />
              <p className="text-white pt-2 text-[6px] ">
                The value has been rounded off
              </p>
            </div>
          </div>
        </div>
        <Activity />
        <div className="connection-btn flex items-center gap-5 mb-3">
          <RecentOrder />
          <Customerfeedback />
        </div>
      </div>
    </>
  );
};

export default Main;
