// components/Item.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faStar } from "@fortawesome/free-solid-svg-icons";

const ItemOverview = ({ image, text, index }) => {
  const isEvenRow = index % 2 === 0;

  return (
    <div
      className={`grid grid-row-1 md:grid-rows-2 items-center md:flex md:flex-col place-items-center px-4 ${
        isEvenRow ? "grid-rows-1 md:grid-rows-2" : "grid-rows-1 md:grid-rows-2 md:flex-row-reverse"
      }`}
    >
      <img
        src="../../../image1.png"
        alt={`Image ${index + 1}`}
        className="size-52 sm:size-60 md:size-72 lg:size-96 object-cover rounded-2xl"
      />
      <div className="p-4 text-start">
        <h2 className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-gray-800 font-medium  md:text-3xl md:font-bold">
          Custom Software Development
        </h2>
        <p className="text-sm text-gray-600 mt-3 md:mt-8 md:text-lg md:font-light text-justify">
          CODE.ID specializes in custom software development, encompassing website and mobile
          application development. Our expertise extends to big data solutions and creating
          intuitive dashboards for comprehensive business insights.
        </p>
        <div className="flex flex-row mt-3 md:mt-10 md:gap-x-4">
          <div className="text-center rounded-full border bg-red-600">
            <h2 className="md:text-md lg:text-lg text-xs p-1 mx-3 text-white font-light ">
              Start Consultant
            </h2>
          </div>
          <div className="flex items-center justify-start  gap-x-1 ms-2">
            <FontAwesomeIcon icon={faStar} className=" text-yellow-400" />
            <p className="md:text-md lg:text-xl text-xs font-light">400++ successful project</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemOverview;
