import React from "react";
import { BsBorderStyle, BsEmojiSunglasses, BsSearch } from "react-icons/bs";
import {
  AiOutlineSetting,
  AiOutlineTransaction,
  AiOutlineLogout,
} from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { SlGraph } from "react-icons/sl";
import {
  MdOutlineProductionQuantityLimits,
  MdOutlineAutoGraph,
} from "react-icons/md";
import { MdNotificationAdd, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { TbFileInvoice } from "react-icons/tb";
import illustrator from "../../assets/redesign/sub.svg";
import soya from "../../assets/redesign/soya.jpg";

function Sidebar() {
  return (
    <>
      <div className="flex">
        <nav className="fixed group flex flex-col justify-between w-16 h-screen py-8 bg-slate-400  border-2 border-r-gray-100 shadow-lg transition-all hover:w-72 hover:px-8 ">
          <div>
            <div className="flex items-center justify-center gap-3 mb-6 md:mb-8 lg:mb-12 ">
              <BsEmojiSunglasses className="text-3xl md:text-4xl" />
              <h1 className="text-2xl font-bold text-center hidden group-hover:block">
                developbysoya
              </h1>
            </div>
            <ul className="flex flex-col gap-6 item-start">
              <li className="flex items-center justify-center gap-3 py-2 md:py-2 lg:py-4 hover:bg-black hover:text-white hover:rounded-md group-hover:px-12 group-hover:justify-start transition-all">
                <TbFileInvoice className="text-2xl md:text-3xl" />
                <a href="#" className="hidden group-hover:block">
                  Invoices
                </a>
              </li>
              <li className="flex items-center justify-center gap-3 py-2 md:py-2 lg:py-4 hover:bg-black hover:text-white hover:rounded-md group-hover:px-12 group-hover:justify-start ">
                <MdOutlineAutoGraph className="text-2xl md:text-3xl transition-all" />
                <a href="#" className="hidden group-hover:block">
                  Dasboard
                </a>
              </li>
              <li className="flex items-center justify-center gap-3 py-2 md:py-2 lg:py-4 hover:bg-black hover:text-white hover:rounded-md group-hover:px-12 group-hover:justify-start transition-all">
                <BsBorderStyle className="text-2xl md:text-3xl" />
                <a href="#" className="hidden group-hover:block">
                  Estimates
                </a>
              </li>
              <li className="flex items-center justify-center gap-3 py-2 md:py-2 lg:py-4 hover:bg-black hover:text-white hover:rounded-md group-hover:px-12 group-hover:justify-start transition-all">
                <AiOutlineTransaction className="text-2xl md:text-3xl" />
                <a href="#" className="hidden group-hover:block">
                  Transection
                </a>
              </li>
              <li className="flex items-center justify-center gap-3 py-2 md:py-2 lg:py-4 hover:bg-black hover:text-white hover:rounded-md group-hover:px-12 group-hover:justify-start transition-all">
                <MdOutlineProductionQuantityLimits className="text-2xl md:text-3xl" />
                <a href="#" className="hidden group-hover:block">
                  Products
                </a>
              </li>
              <li className="flex items-center justify-center gap-3 py-2 md:py-2 lg:py-4 hover:bg-black hover:text-white hover:rounded-md group-hover:px-12 group-hover:justify-start transition-all">
                <FiUser className="text-2xl md:text-3xl" />
                <a href="#" className="hidden group-hover:block whitespace-pre">
                  My Team
                </a>
              </li>
              <li className="flex items-center justify-center gap-3 py-2 md:py-2 lg:py-4 hover:bg-black hover:text-white hover:rounded-md group-hover:px-12 group-hover:justify-start transition-all">
                <AiOutlineSetting className="text-2xl md:text-3xl" />
                <a href="#" className="hidden group-hover:block">
                  Settings
                </a>
              </li>
            </ul>
          </div>
          {/* <div className="bg-blue-200 rounded-md my-3 py-3">
            <img src={illustrator} alt="" className="w-48 h-full" />
          </div> */}
          <div className="flex gap-3 align-bottom justify-center transition-all">
            <AiOutlineLogout className="text-2xl md:text-3xl" />
            <a
              href="#"
              className="font-semibold text-lg hidden group-hover:block"
            >
              Log out
            </a>
          </div>
        </nav>
        <section className="w-full px-12 py-8">
          <div className="flex flex-col-reverse gap-8 md:items-center md:flex-row md:justify-between">
            <h1 className="font-bold text-3xl">Dashboard</h1>
            <div className="flex flex-col gap-8 md:flex-row">
              <div className="flex gap-2 items-center">
                <div className="flex items-center gap-4 w-72">
                  <BsSearch
                    size={28}
                    className="cursor-pointer"
                    onClick={() => alert("Hi Lovely")}
                  />
                  <input
                    type="text"
                    className="border-b-2 border-gray-200 w-full outline-none"
                    placeholder="Search"
                  />
                </div>
                <div className="flex justify-center items-center bg-gray-100 w-12 h-12 rounded-full">
                  <MdNotificationAdd size={28} />
                </div>
              </div>
              <div className="flex gap-4">
                <img
                  src={soya}
                  alt="me"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <div className="flex gap-2 items-center">
                    <h4 className="font-bold text-xl">Soriya Raksmey</h4>
                    <MdOutlineKeyboardArrowDown
                      size={28}
                      className="text-gray-400"
                    />
                  </div>
                  <span className="text-gray-600">Sotfware Developer</span>
                </div>
              </div>
            </div>
          </div>
          {/* content */}
          <div className="grid grid-cols-2 gap-4 py-16 md:grid-cols-3">
            <div className="col-span-2">
              {/* card */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3 ">
                <div className="flex flex-col gap-4 bg-gray-100 rounded-xl p-6">
                  <div className="flex gap-4 items-center">
                    <span className="text-xl text-gray-600">Total Earning</span>
                    <SlGraph size={28} className="text-gray-600" />
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                    <div className="bg-black h-1.5 rounded-full dark:bg-blue-500 w-1/2"></div>
                  </div>
                  <h1 className="text-3xl">$ 12,495.00</h1>
                </div>
                <div className="flex flex-col gap-4 bg-gray-100 rounded-xl p-6">
                  <div className="flex gap-4 items-center">
                    <span className="text-xl text-gray-600">
                      Total Spending
                    </span>
                    <SlGraph size={28} className="text-gray-600" />
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                    <div className="bg-yellow-400 h-1.5 rounded-full dark:bg-blue-500 w-1/2"></div>
                  </div>
                  <h1 className="text-3xl">$ 12,495.00</h1>
                </div>
                <div className="flex flex-col gap-4 bg-gray-100 rounded-xl p-6">
                  <div className="flex gap-4 items-center">
                    <span className="text-xl text-gray-600">
                      Goal this month
                    </span>
                    <SlGraph size={28} className="text-gray-600" />
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                    <div className="bg-green-900 h-1.5 rounded-full dark:bg-blue-500 w-1/2"></div>
                  </div>
                  <h1 className="text-3xl">$ 12,495.00</h1>
                </div>
              </div>
              {/* card */}
            </div>
            <div className="...">02</div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Sidebar;
