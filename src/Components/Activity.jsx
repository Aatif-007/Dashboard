import React from "react";
import { SlTarget } from "react-icons/sl";
import { MdKeyboardArrowRight } from "react-icons/md";
import { LiaHamburgerSolid } from "react-icons/lia";
import { BiDish } from "react-icons/bi";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Styles/activity.css'

const Activity = () => {

    const data = [
        { name: 5, uv: 4000 ,pv: 2400 },
        { name: 9, uv: 3000 },
        { name: 11, uv: 2000 },
        { name: 13, uv: 2780 },
        { name: 15, uv: 1890 },
        { name: 17, uv: 2390 },
        { name: 19, uv: 3490 },
        { name: 21, uv: 1490 },
        { name: 23, uv: 5490 },
        { name: 25, uv: 2390 },
        { name: 27, uv: 3490 },
      ];
  return (
    <>
      <div className=" activity-sec w-full  mt-4 flex items-center justify-between gap-6 ">
        <div className=" activity-sec-2 min-w-[57.5%]  rounded-md bg-gray-700 min-h-[230px] p-3 hover:bg-gray-600">
        <div className="flex items-center justify-between font-poppins">
            <div className="text-white font-poppins font-bold">Activity</div>
            <div className="text-white text-[0.8rem] bg-gray-400 w-16 text-center rounded-xl">
              Weekly
            </div>
          </div>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="name" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip
                contentStyle={{ backgroundColor: "#333", borderColor: "#333" }}
              />
              <Bar dataKey="uv" fill="#6366f1" radius={[20, 20, 0, 0]}/>
            </BarChart>
          </ResponsiveContainer>
          
        </div>
        <div className="goal-section min-w-[41.5%] rounded-md min-h-[230px] bg-gray-700 p-5 hover:bg-gray-600 ">
          <div className="goal-section-2 flex items-center justify-between mb-9 ">
            {/* inside */}
            <div className="flex gap-3 items-center">
              {/* icon left */}
              <span className="bg-pink-600 w-8 flex items-center justify-center rounded-full h-8">
                <SlTarget className="text-red-800 text-xl" />
              </span>
              <p className="text-white">Goals</p>
            </div>

            <div>
              {/* Icon right */}
              <div className="bg-gray-400 w-7 h-7 rounded-full flex items-center justify-center">
                <MdKeyboardArrowRight className="text-white text-2xl" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mb-9">
            {/* inside */}
            <div className="flex gap-3 items-center">
              {/* icon left */}
              <span className="bg-purple-300 w-8 flex items-center justify-center rounded-full h-8">
                <LiaHamburgerSolid className="text-purple-800 text-xl" />
              </span>
              <p className="text-white">Popular Dishes</p>
            </div>

            <div>
              {/* Icon right */}
              <div className="bg-gray-400 w-7 h-7 rounded-full flex items-center justify-center">
                <MdKeyboardArrowRight className="text-white text-2xl" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between  ">
            {/* inside */}
            <div className="flex gap-3 items-center">
              {/* icon left */}
              <span className="bg-blue-300 w-8 flex items-center justify-center rounded-full h-8">
                <BiDish className="text-blue-800 text-xl" />
              </span>
              <p className="text-white">Menu</p>
            </div>

            <div>
              {/* Icon right */}
              <div className="bg-gray-400 w-7 h-7 rounded-full flex items-center justify-center">
                <MdKeyboardArrowRight className="text-white text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activity;
