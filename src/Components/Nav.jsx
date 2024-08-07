import React from "react";
import { CiMail } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaFan } from "react-icons/fa";

const Nav = () => {
  return (
    <>
      <div className=" navbar bg-gray-700  h-[3rem] px-2  ">
        <div className="flex items-center justify-between py-2">
          <FaFan className="text-2xl text-blue-500" />
          <div className="search pl-5 flex items-center gap-2">
            <input
              type="text"
              className=" text-white bg-zinc-700 pl-2' border-[1px] outline-none rounded-md w-full md:w-[14rem] xl:w-[20rem] "
              placeholder="Search"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 bg-gray-500 rounded-[100%]"><CiMail className="text-white" /></span>
            <span className="flex items-center justify-center w-8 h-8 bg-gray-500 rounded-[100%]"><IoSettingsOutline className="text-white" /></span>
            <span className="flex items-center justify-center w-8 h-8 bg-gray-500 rounded-[100%]"><IoIosNotificationsOutline className="text-white" /></span>
            <span className="flex items-center justify-center w-8 h-8 bg-gray-500 rounded-[100%] ml-3"><CgProfile className="text-white" /></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;