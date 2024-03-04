// components/Item.js
import React from "react";
import VisibleComponent from "../Visible";
import Image from "next/image";

const ItemPosition1 = ({ image, text, index }) => {
  const { ref, isVisible } = VisibleComponent();

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 md:grid-cols-1 mb-4 ${
        isVisible
          ? "animate-fade-up animate-once animate-duration-[800ms] animate-delay-200 animate-ease-in"
          : "opacity-0"
      }`}
    >
      <div className="mb-4 p-2 border rounded-xl sm:mx-2 text-center">
        <div className="flex flex-row gap-x-4 sm:flex-col p-4">
          <div className="self-center">
            <Image
              alt={`Image ${index + 1}`}
              className=" w-[80px] object-cover"
              src={image}
              width={100}
              height={100}
              style={{ width: "100", height: "100", objectFit: "cover" }}
            />
          </div>
          <div className="flex flex-row sm:flex-col gap-y-1 sm:px-3 sm:mt-3 md:mt-4">
            <div className="text-sm font-semibold text-black lg:text-lg self-center ">{text}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPosition1;
