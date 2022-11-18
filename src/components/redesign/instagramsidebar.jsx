import React from "react";
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import { BsEmojiSunglasses } from "react-icons/bs";
import { MdHomeFilled, MdOutlineExplore, MdSearch } from "react-icons/md";
import { BiMessageSquareAdd } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import soya from "../../assets/redesign/soya.jpg";
import { hover } from "@testing-library/user-event/dist/hover";

function Instagam() {
  return (
    <div className="w-24 md:w-64 border-r border-gray-300">
      <div className="w-full h-screen flex justify-between flex-col p-4">
        {/* logo */}
        <div className="flex items-center rounded-2xl cursor-pointe p-4 ">
          <BsEmojiSunglasses size={32} className="md:hidden" />
          <h3 className="hidden text-3xl font-pattaya md:block">Instagram</h3>
        </div>
        {/* li items */}
        <div className="flex flex-col pb-16">
          <li className="flex items-center rounded-2xl cursor-pointer hover:bg-gray-100 p-4">
            <MdHomeFilled size={32} />
            <a href="#" className="hidden md:block text-lg pl-4">
              Home
            </a>
          </li>
          <li className="flex items-center rounded-2xl  cursor-pointer  hover:bg-gray-100  p-4">
            <MdSearch size={32} />
            <a href="#" className="hidden md:block  text-lg pl-4">
              Search
            </a>
          </li>
          <li className="flex items-center  rounded-2xl cursor-pointer  hover:bg-gray-100 p-4">
            <MdOutlineExplore size={32} />
            <a href="#" className="hidden md:block  text-lg pl-4">
              Explore
            </a>
          </li>
          <li className="flex items-center  rounded-2xl cursor-pointer  hover:bg-gray-100 p-4">
            <AiOutlineMessage size={32} />
            <a href="#" className="hidden md:block  text-lg pl-4">
              Messages
            </a>
          </li>
          <li className="flex items-center rounded-2xl cursor-pointer  hover:bg-gray-100 p-4">
            <AiOutlineHeart size={32} />
            <a href="#" className="hidden md:block  text-lg pl-4">
              Notifications
            </a>
          </li>
          <li className="flex items-center  rounded-2xl cursor-pointer hover:bg-gray-100 p-4 ">
            <BiMessageSquareAdd size={32} />
            <a href="#" className="hidden md:block  text-lg pl-4">
              Create
            </a>
          </li>
          <li className="flex items-center  rounded-2xl cursor-pointer  hover:bg-gray-100 p-4">
            <img
              src={soya}
              alt="me"
              className="w-8 h-8 rounded-full object-cover 
             -hover:w-[33px] -hover:transition-all"
            />
            <a href="#" className="hidden md:block  text-lg pl-4">
              Profile
            </a>
          </li>
        </div>
        {/* more */}
        <div className="flex items-center  rounded-2xl cursor-pointer hover:bg-gray-100 p-4">
          <GiHamburgerMenu size={32} />
          <a className="hidden md:block  text-lg pl-4" href="#">
            More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Instagam;
