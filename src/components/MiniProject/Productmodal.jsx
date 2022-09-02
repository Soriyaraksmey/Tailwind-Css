import React from "react";
import headset from "../../assets/miniproject/productmodal/headphone.png";
import heart from "../../assets/miniproject/productmodal/heart.png";
import weight from "../../assets/miniproject/productmodal/weight.png";

const Productmodal = () => {
  return (
    <div className="flex justify-center items-center  h-screen bg-slate-100">
      <div className="flex flex-col p-6  space-y-10 bg-white rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:space-x1-10 md:m-0 md:p-16">
        {/* <!-- image div --> */}
        <div>
          <img
            src={headset}
            alt="headset-img"
            className="mx-auto duration-200 w-60 hover:scale-105"
          />
        </div>
        {/* content */}
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col mb-4 space-y-3 text-cener md:text-left">
            <div>
              <div className="inline-block px-3 py-1 text-sm text-white bg-black rounded-full">
                Free Shipping
              </div>
            </div>

            <div className="max-w-sm text-2xl font-medium">
              Razer kraken Kitty Edt Gaming headset Quartz
            </div>
            <div className="flex flex-col mb-t space-y-3 text-center md:text-left">
              <p className="line-through">$799</p>
              <p className="text-5xl font-bold">599$</p>
              <p className="text-sm font-light text-gray-400">
                This offer is valid until April 3 or as long as stock lasts!
              </p>
            </div>
            <div className="group">
              <button className="w-full bg-blue-700 text-white border-b-8 border-b-blue-700 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-blue-700 group-hover:border-t-blue-700 group-hover:shadow-lg">
                <div className="px-8 py-4 bg-blue-500 rounded-lg duration-200 group-hover:bg-blue-700">
                  Add to cart
                </div>
              </button>
            </div>
            <div className="flex items-center space-x-3 group">
              <div className="w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping"></div>
              <div className="text-sm">50+ pcs. in stock</div>
            </div>
            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
              <button className="flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150">
                <img src={weight} alt="weight-img" className="w-8" />
                <span>Add to Card</span>
              </button>
              <button className="flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150">
                <img src={heart} alt="weight-img" className="w-8" />
                <span>Add to whactlist</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productmodal;
