import React from "react";
import VisibleComponent from "../Visible";
import Image from "next/image";

const ItemCommercials = ({ itemicon, itemjudul, itemsubjudul, produk, index, listitem }) => {
  const { ref, isVisible } = VisibleComponent();
  return (
    <div
      ref={ref}
      className={` ${
        isVisible
          ? "animate-fade-up animate-once animate-duration-[800ms] animate-delay-200 animate-ease-in"
          : "opacity-0"
      }`}
    >
      <div className="flex flex-col flex-auto p-6  max-w-md text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow  xl:p-8 w-[21rem] transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-400  min-h-[37rem] hover:bg-gray-800 hover:text-white mb-4 focus:bg-gray-800">
        <div className="flex gap-x-5">
          <div>
            <Image
              src={itemicon}
              alt={`Image ${index + 1}`}
              width={80}
              height={80}
              style={{ objectFit: "contain", width: "auto", height: "auto" }}
            />
          </div>
          <div className="text-start self-center ">
            <h3 className="text-xl font-semibold ">{itemjudul}</h3>
            <p className="font-light  sm:text-lg ">{itemsubjudul}</p>
          </div>
        </div>

        <div className="flex justify-start items-baseline my-8">
          <span className="mr-2 text-xl md:text-2xl font-bold text-start">{produk}</span>
        </div>

        <ul role="list" className={`mb-8 space-y-4 text-left ${!listitem ? "hidden" : ""}`}>
          {listitem}
        </ul>
      </div>
    </div>
  );
};

export default ItemCommercials;
