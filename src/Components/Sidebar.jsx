import React from "react";
import { GoHome } from "react-icons/go";
import { HiOutlineChartBar } from "react-icons/hi2";
import { LuClipboardCheck } from "react-icons/lu";
import { CiWallet } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import { LiaSignOutAltSolid } from "react-icons/lia";


const Sidebar = () => {
  return (
    <div className="flex ">
      <div className="sidebar w-[3rem] bg-gray-700">
      <div className="py-2 text-white ">
        <div className="flex items-center justify-center pt-2">
          
        </div>
      </div>
      <div className="sidebar flex flex-col  items-center min-h-calc-full-minus-navbar justify-start">
        <div className="icon-menu  flex flex-col justify-around space-y-16 ">
          <div>
            <GoHome className="text-blue-600 text-xl" />
          </div>
          <div>
            {" "}
            <HiOutlineChartBar className="text-white text-xl" />
          </div>
          <div>
            <LuClipboardCheck className="text-white text-xl" />
          </div>
          <div>
            {" "}
            <CiWallet className="text-white text-xl" />
          </div>
          <div>
            <IoBagCheckOutline className="text-white text-xl" />
          </div>
        </div>
        <div className="pt-64">
          <LiaSignOutAltSolid className="text-white text-2xl" />
        </div>
      </div>
    </div>
    <div>
    </div>
    </div>
  );
};

export default Sidebar;
