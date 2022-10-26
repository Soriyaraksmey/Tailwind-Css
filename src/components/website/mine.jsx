import React, { useState } from "react";
import { ReactComponent as Gmail } from "../../assets/website/mine/iconmonstr-steam-4.svg";
import { ReactComponent as Facebook } from "../../assets/website/mine/iconmonstr-facebook-6.svg";
import { ReactComponent as Instagram } from "../../assets/website/mine/iconmonstr-instagram-11.svg";
import { ReactComponent as Telegram } from "../../assets/website/mine/iconmonstr-telegram-1.svg";
function Mine() {
  const [Open, SetOpen] = useState(false);
  const handleClick = () => {
    SetOpen(!Open);
  };
  return (
    <>
      <section id="soriya">
        <div className="container mx-auto px-6 h-screen md:px-0 md:max-9">
          <nav className="hidden text-white md:flex md:items-center md:justify-between md:py-4 ">
            <div className="group">
              <a href="" className="font-Bebas text-xl text-primaryYellow">
                Home
              </a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-500 "></div>
            </div>
            <div className="group">
              <a href="" className="font-Bebas text-xl">
                Project
              </a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-500"></div>
            </div>
            <div className="group">
              <a href="" className="font-Bebas text-xl">
                About
              </a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-500"></div>
            </div>
            <div className="group">
              <a href="" className="font-Bebas text-xl">
                Contact
              </a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-500"></div>
            </div>
          </nav>
          <div className="">
            <div className="flex flex-col items-center justify-center h-[90vh] mx-auto text-center">
              <span className="font-Bebas text-7xl text-primaryYellow tracking-wide md:text-title md:tracking-wider ">
                RAKSMEY SORIYA
              </span>
              <span className="font-SourceSans text-white md:w-1/2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, aperiam accusamus voluptatum eius modi voluptas, nemo
                cupiditate, rem eaque veniam reiciendis quisquam vel dicta minus
                eligendi temporibus quas libero iste!
              </span>
            </div>
            <div className="flex items-center justify-end space-x-4 md:space-x-8 ">
              <Gmail />
              <Telegram />
              <Facebook />
              <Instagram />
            </div>
          </div>
        </div>
      </section>
      <section id="experiences" className="bg-background">
        <span className="text-white">Hello</span>
      </section>
    </>
  );
}

export default Mine;
