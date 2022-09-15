import React from "react";
import vr from "../../assets/website/loopstudio/vr2.jpg";
import item1 from "../../assets/website/loopstudio/vr.jpg";
import item2 from "../../assets/website/loopstudio/item2.jpg";
import item3 from "../../assets/website/loopstudio/item3.jpg";
import item4 from "../../assets/website/loopstudio/item4.jpg";
import item5 from "../../assets/website/loopstudio/item5.jpg";
import item6 from "../../assets/website/loopstudio/item6.jpg";
import item7 from "../../assets/website/loopstudio/item7.jpg";
import item8 from "../../assets/website/loopstudio/item8.jpg";
import { useState } from "react";
// import instargram from "../../assets/website/loopstudio/ig.svg";
// import facebook from "../../assets/website/loopstudio/facebook.svg";
// import messager from "../../assets/website/loopstudio/messager.svg";
// import telegram from "../../assets/website/loopstudio/tele.svg";
function LoopStudio() {
  const [Open, SetOpen] = useState(false);

  const handleClick = () => {
    SetOpen(!Open);
  };
  return (
    <>
      <section id="Hero">
        <div className="container max-w-6xl mx-auto px-6 py-12 md:px-0">
          <nav className="flex items-center justify-between font-bold text-white">
            <div className="font-bold text-4xl">loopstudio</div>
            <div className="hidden h-10 font-alata md:flex md:space-x-8">
              <div className="group">
                <a href="">About</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-500"></div>
              </div>
              <div className="group">
                <a href="">Events</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-500"></div>
              </div>
              <div className="group">
                <a href="">Supports</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-500"></div>
              </div>
              <div className="group">
                <a href="">Carres</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-500"></div>
              </div>
              <div className="group">
                <a href="">Contact Me</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-500"></div>
              </div>
            </div>
            <div className="md:hidden">
              <button
                className={`${
                  Open ? "open" : ""
                } z-40 block hamburger md:hidden focus:outline-none`}
                id="menu-btn"
                onClick={handleClick}
              >
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </button>
            </div>
          </nav>
          <div
            id="menu"
            className={`absolute ${
              Open ? "flex" : "hidden"
            } top-0 bottom-0 left-0 flex-col self-end z-100 w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black`}
          >
            <a href="#" className="hover:text-strongCyan">
              About
            </a>
            <a href="#" className="hover:text-strongCyan">
              Events
            </a>
            <a href="#" className="hover:text-strongCyan">
              Supports
            </a>
            <a href="#" className="hover:text-strongCyan">
              Carres
            </a>
            <a href="#" className="hover:text-strongCyan">
              Contact Me
            </a>
          </div>
          <div className="flex items-start flex-col max-w-lg mt-32 mb-32 p-4 md:p-10 md:m-32 md:mx-0">
            <div className="font-sans text-4xl text-white uppercase boder-2  md:text-6xl">
              Impressive <span className="text-cyan-500">Experiences</span> That
              Deliver
            </div>
            {/* <button className="bg-clip-padding z-20 backdrop-filter backdrop-blur-md bg-opacity-30 text-white px-10 py-3 rounded-2xl border border-cyan-500">
              Book Now
            </button> */}
          </div>
        </div>
      </section>
      <section id="feature">
        <div className="relative container flex flex-col max-w-6xl mx-auto my-20 px-6 text-gray-900 md:flex-row md:px-0">
          <img src={vr} alt="test" className="max-w-3xl h-auto" />
          <div className="top-48 pr-0 bg-white transition-shadow ease-in-out duration-300 shadow-none hover:shadow-2xl md:absolute md:right-0 md:py-20 md:pl-20 ">
            <h2 className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-600 uppercase md:text-5xl md:mt-0 md:text-left">
              The Leader in interactive vr
            </h2>
            <p className="max-w-md text-center text-xl md:text-left">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum,
              corrupti. Officiis nemo, culpa voluptatibus assumenda dolorum eum
              non ipsa veniam natus.
            </p>
          </div>
        </div>
      </section>
      <section id="creation">
        <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-600 md:px-0">
          <div className="flex justify-center mb-20 md:justify-between">
            <h2 className="text-4xl text-center uppercase md:text-left">
              Our createion
            </h2>
            <button className="hidden btn  md:block">See all</button>
          </div>
          <div className="item-container">
            <div className="group item">
              <img
                src={item1}
                alt="test"
                className="object-cover h-48 w-full duration-200 md:block group-hover:scale-110 md:h-auto md:w-full"
              />
              <div className="item-gradient"></div>
              <h5>3D world</h5>
            </div>
            <div className="group item">
              <img
                src={item2}
                alt="test"
                className="object-cover h-48 w-full duration-200 md:block group-hover:scale-110 md:bg-center md:h-full "
              />
              <div className="item-gradient"></div>
              <h5>experience</h5>
            </div>
            <div className="group item">
              <img
                src={item3}
                alt="test"
                className="object-cover h-48 w-full duration-200 md:block group-hover:scale-110 md:bg-right md:h-full"
              />
              <div className="item-gradient"></div>
              <h5>imagination</h5>
            </div>
            <div className="group item">
              <img
                src={item4}
                alt="test"
                className="object-cover h-48 w-full duration-200 md:block group-hover:scale-110 md:bg-center md:h-full"
              />
              <div className="item-gradient"></div>
              <h5>reality</h5>
            </div>
          </div>
          <div className="item-container my-10">
            <div className="group item">
              <img
                src={item5}
                alt="test"
                className="object-cover h-48 w-full duration-200 md:block group-hover:scale-110 md:h-auto md:w-full"
              />
              <div className="item-gradient"></div>
              <h5>3D world</h5>
            </div>
            <div className="group item">
              <img
                src={item6}
                alt="test"
                className="object-cover h-48 w-full duration-200 md:block group-hover:scale-110 md:bg-center md:h-full "
              />
              <div className="item-gradient"></div>
              <h5>experience</h5>
            </div>
            <div className="group item">
              <img
                src={item7}
                alt="test"
                className="object-cover h-48 w-full duration-200 md:block group-hover:scale-110 md:bg-right md:h-full"
              />
              <div className="item-gradient"></div>
              <h5>imagination</h5>
            </div>
            <div className="group item">
              <img
                src={item8}
                alt="test"
                className="object-cover h-48 w-full duration-200 md:block group-hover:scale-110 md:bg-center md:h-full"
              />
              <div className="item-gradient"></div>
              <h5>reality</h5>
            </div>
          </div>
          <div className="flex justify-center mt-10 md:hidden">
            <button className="btn">See all</button>
          </div>
        </div>
      </section>
      <footer className="bg-black">
        <div className="container max-w-6xl py-10 mx-auto">
          <div className="flex flex-col item-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:item-start">
            <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
              <div className="h-8">
                <span className="font-bold text-4xl text-white">
                  loopstudio
                </span>
              </div>
              <div className="flex flex-col item-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 ">
                <div className="h-10 group">
                  <a href="#">About</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-500"></div>
                </div>
                <div className="h-10 group">
                  <a href="#">Our Service</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-500"></div>
                </div>
                <div className="h-10 group">
                  <a href="#">Contact Us</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-500"></div>
                </div>
                <div className="h-10 group">
                  <a href="#">Join us</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-500"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-around md:items-center md:w-1/6">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
                className="fill-white"
              >
                <path d="M12 0c-6.627 0-12 4.975-12 11.111 0 3.497 1.745 6.616 4.472 8.652v4.237l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111 0-6.136-5.373-11.111-12-11.111zm1.193 14.963l-3.056-3.259-5.963 3.259 6.559-6.963 3.13 3.259 5.889-3.259-6.559 6.963z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-white"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-white"
              >
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-white"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-4.738 0-8.71-3.317-9.735-7.749l3.752 1.578c.244 1.235 1.338 2.182 2.67 2.171 1.477-.014 2.662-1.211 2.672-2.682l.006-.003 3.087-2.301c1.975.021 3.548-1.571 3.548-3.506 0-1.937-1.572-3.508-3.508-3.508-1.915 0-3.47 1.535-3.506 3.441l-2.263 3.166c-.572-.012-1.087.145-1.535.438l-5.123-2.155c.555-4.994 4.797-8.89 9.935-8.89 5.514 0 10 4.486 10 10s-4.486 10-10 10zm-2.753-8.091l-1.322-.555c.249-.094.492-.137.738-.137 1.138 0 2.074.926 2.084 2.065.01 1.153-.912 2.094-2.066 2.104-.867.004-1.602-.513-1.928-1.248l1.324.556c.769.323 1.653-.039 1.977-.807.324-.768-.037-1.654-.807-1.978zm2.861-4.401c0-1.315 1.069-2.384 2.384-2.384s2.384 1.069 2.384 2.384c0 1.314-1.069 2.385-2.384 2.385s-2.384-1.07-2.384-2.385zm2.384 1.801c-.994 0-1.802-.807-1.802-1.8s.808-1.801 1.802-1.801c.993 0 1.8.809 1.8 1.801 0 .992-.807 1.8-1.8 1.8z" />
              </svg>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default LoopStudio;
