// components/Item.js
import React from "react";

import VisibleComponent from "../Visible";
import Image from "next/image";

const OurProduct = ({ text, desc, listfitur, image, index }) => {
  const imageurl = process.env.NEXT_PUBLIC_IMG_URL;
  const { ref, isVisible } = VisibleComponent();

  return (
    <div
      ref={ref}
      className={`${
        isVisible
          ? "animate-fade-up animate-once animate-duration-[800ms] animate-delay-0 animate-ease-in"
          : "opacity-0"
      } px-8 flex flex-col gap-y-4  lg:flex lg:flex-row-reverse md:px-16 lg:px-40 py-20`}
    >
      <div className={`flex justify-center`}>
        <div className="">
          <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[500px] w-[300px] shadow-xl">
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-[272px] h-[472px] bg-white">
              <div className="flex justify-center items-center h-full">
                <Image
                  src={image}
                  className=" w-[272px] h-[472px] self-center"
                  alt=""
                  width={500}
                  height={500}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`md:w-full md:mt-16 md:me-24`}>
        <h2 className="text-3xl font-bold text-gray-800 items-center flex py-4">{text}</h2>
        <p className="text-lg text-gray-700 md:mb-6 mb-8 text-justify ">{desc}</p>
        <ul className="grid list-none grid-cols-1 md:grid-cols-2 gap-y-2">{listfitur}</ul>
      </div>
    </div>
  );
};

export default OurProduct;
