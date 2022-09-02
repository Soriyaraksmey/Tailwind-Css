import React from "react";
import Image1 from "../../assets/miniproject/imagegallery/image1.jpg";
import bookmark from "../../assets/miniproject/imagegallery/bookmark.svg";
function Imagegellery() {
  return (
    <div className="flex justify-center items-center  h-screen bg-slate-100">
      <div className="bg-white p-6 m-3 space-y-10 shadow-2xl rounded-3xl md:p-40">
        <div className="flex flex-col items-center justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-8 md:mb-24 md:justify-end">
          <div className="group">
            <a href="">Vector</a>
            <div className="mx-2 mt-2 duration-1000 border-b-0 opacity-0 border-black group-hover:opacity-100 group-hover:border-b-2"></div>
          </div>
          <div className="group">
            <a href="">Illustration</a>
            <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
          </div>
          <div className="group">
            <a href="">Images</a>
            <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
          </div>
          <div className="group">
            <a href="">Icons</a>
            <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
          </div>
        </div>
        <div className="flex flex-col justify-between space-y-5 md:flex-row md:space-y-0">
          <div className="flex justify-between border-b-2">
            <input
              type="text"
              className="ml-6 border-none md:w-80 placeholder:font-thin focus:outline-none"
              placeholder="Search"
            />
          </div>
          <button className="py-3 px-14 text-lg font-normal text-white bg-black border border-black rounded-md shadow-2xl duration-200 hover:bg-white hover:text-black">
            Upload
          </button>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="relative group">
            <img src={Image1} alt="image" className="w-72" />
            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">245 likes - 35 shares</p>
                </div>
                <div className="flex item-center">
                  <img src={bookmark} alt="bookmark" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <img src={Image1} alt="image" className="w-72" />
            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">245 likes - 35 shares</p>
                </div>
                <div className="flex item-center">
                  <img src={bookmark} alt="bookmark" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <img src={Image1} alt="image" className="w-72" />
            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">245 likes - 35 shares</p>
                </div>
                <div className="flex item-center">
                  <img src={bookmark} alt="bookmark" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <img src={Image1} alt="image" className="w-72" />
            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">245 likes - 35 shares</p>
                </div>
                <div className="flex item-center">
                  <img src={bookmark} alt="bookmark" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Imagegellery;
