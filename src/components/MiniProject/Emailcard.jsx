import React from "react";
import img from "../../assets/miniproject/image.jpg";

function Emailcard() {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-gray-100 p-2 mx-6 rounded-2xl">
          <div className="flex flex-col md:flex-row rounded-l-xl">
            <img
              src={img}
              alt="images"
              className="object-fit rounded-xl h-80 md:h-64 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200"
            />
            <div className="p-6 md:p-12">
              <h2 className="font-serif text-xl font-bold text-center text-green-300 md:text-left">
                Get diet and fitness tips under yout inbox
              </h2>
              <p className="max-w-xs my-4 text-xs leading-5 tracking-wide text-center text-gray-400 md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam aliquam vel delectus fugit laborum nam, perferendis non
                perspiciatis.
              </p>
              <div className="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0">
                <input
                  type="text"
                  name="text"
                  id="text"
                  placeholder="Enter your email address"
                  className="p-2 px-4 text-center text-black bg-gray-100 border border-green-400 placeholder:text-xs placeholder:text-center placeholder:md:text-left md:text-left focus:outline-none"
                />
                <button className="px-5 py-3 text-xs rounded-md text-white bg-green-400 hover:bg-green-600 hover:text-white duration-200">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Emailcard;
