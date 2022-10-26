import React from "react";
import { BsBorderStyle, BsEmojiSunglasses } from "react-icons/bs";
import {
  AiOutlineSetting,
  AiOutlineTransaction,
  AiOutlineLogout,
} from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import {
  MdOutlineProductionQuantityLimits,
  MdOutlineAutoGraph,
} from "react-icons/md";
import { TbFileInvoice } from "react-icons/tb";
import illustrator from "../../assets/redesign/sub.svg";

function Sidebar() {
  return (
    <>
      <div className="flex gap-6">
        <nav className="group flex flex-col justify-between w-16 h-screen py-6  border-2 border-r-gray-100 shadow-lg transition-all hover:w-72 hover:px-8 ">
          <div>
            <div className="flex items-center justify-center gap-3 mb-12">
              <BsEmojiSunglasses className="text-4xl" />
              <h1 className="text-2xl font-bold text-center hidden group-hover:block">
                developbysoya
              </h1>
            </div>
            <ul className="flex flex-col gap-6 item-start">
              <li className="flex items-center justify-center gap-3 py-4 hover:bg-black hover:text-white hover:rounded-md group-hover:px-12 group-hover:justify-start transition-all">
                <TbFileInvoice className="text-3xl" />
                <a href="#" className="hidden group-hover:block">
                  Invoices
                </a>
              </li>
              <li className="flex items-center justify-center gap-3 py-4 hover:bg-black hover:text-white hover:rounded-md group-hover:px-12 group-hover:justify-start ">
                <MdOutlineAutoGraph className="text-3xl transition-all" />
                <a href="#" className="hidden group-hover:block">
                  Dasboard
                </a>
              </li>
              <li className="flex items-center justify-center gap-3 py-4 hover:bg-black hover:text-white hover:rounded-md group-hover:px-12 group-hover:justify-start transition-all">
                <BsBorderStyle className="text-3xl" />
                <a href="#" className="hidden group-hover:block">
                  Estimates
                </a>
              </li>
              <li className="flex items-center justify-center gap-3 py-4 hover:bg-black hover:text-white hover:rounded-md group-hover:px-12 group-hover:justify-start transition-all">
                <AiOutlineTransaction className="text-3xl" />
                <a href="#" className="hidden group-hover:block">
                  Transection
                </a>
              </li>
              <li className="flex items-center justify-center gap-3 py-4 hover:bg-black hover:text-white hover:rounded-md group-hover:px-12 group-hover:justify-start transition-all">
                <MdOutlineProductionQuantityLimits className="text-3xl" />
                <a href="#" className="hidden group-hover:block">
                  Products
                </a>
              </li>
              <li className="flex items-center justify-center gap-3 py-4 hover:bg-black hover:text-white hover:rounded-md group-hover:px-12 group-hover:justify-start transition-all">
                <FiUser className="text-3xl" />
                <a href="#" className="hidden group-hover:block whitespace-pre">
                  My Team
                </a>
              </li>
              <li className="flex items-center justify-center gap-3 py-4 hover:bg-black hover:text-white hover:rounded-md group-hover:px-12 group-hover:justify-start transition-all">
                <AiOutlineSetting className="text-3xl" />
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
            <AiOutlineLogout className="text-3xl" />
            <a
              href="#"
              className="font-semibold text-lg hidden group-hover:block"
            >
              Log out
            </a>
          </div>
        </nav>
        <section>other content</section>
      </div>
    </>
  );
}

export default Sidebar;
