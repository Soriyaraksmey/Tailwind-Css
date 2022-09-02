import React from "react";
import Emailcard from "./MiniProject/Emailcard";
import { Link, To } from "react-router-dom";

const Wrapper = () => {
  return (
    <div className="m-20">
      <h1 className="font-bold">MiniProject</h1>
      <div className="flex item-center justify-start mt-4 space-x-5">
        <Link
          className="px-6 py-3 bg-gray-400 rounded-lg hover:scale-105 hover:bg-gray-500"
          to="/emailcard"
        >
          Email Card
        </Link>
        <Link
          className="px-6 py-3 bg-gray-400 rounded-lg hover:scale-105 hover:bg-gray-500"
          to="/pricinggrid"
        >
          Pricing Card
        </Link>
        <Link
          className="px-6 py-3 bg-gray-400 rounded-lg hover:scale-105 hover:bg-gray-500"
          to="/productmodal"
        >
          Pricing Card
        </Link>
        <Link
          className="px-6 py-3 bg-gray-400 rounded-lg hover:scale-105 hover:bg-gray-500"
          to="/imagegallery"
        >
          Image gallery
        </Link>
        <Link
          className="px-6 py-3 bg-gray-400 rounded-lg hover:scale-105 hover:bg-gray-500"
          to="/loginmodal"
        >
          Loing Modal
        </Link>
      </div>
      <h1 className="font-bold mt-12">Website</h1>
      <div className="flex item-center justify-start mt-4 space-x-5">
        <Link
          className="px-6 py-3 bg-gray-400 rounded-lg hover:scale-105 hover:bg-gray-500"
          to="/CilpboardWebsite"
        >
          ClipBoard Website
        </Link>
      </div>
    </div>
  );
};

export default Wrapper;
