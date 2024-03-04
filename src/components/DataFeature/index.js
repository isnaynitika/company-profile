// components/Item.js
import React from "react";
import VisibleComponent from "../Visible";
import Image from "next/image";

const ItemFeature = ({ gambar, bidangbisnis, penjelas, index }) => {
  const { ref, isVisible } = VisibleComponent();
  return (
    <div
      ref={ref}
      className={`${
        isVisible
          ? "animate-fade-down animate-once animate-duration-[800ms] animate-delay-0 animate-ease-linear"
          : "opacity-0"
      } flex-auto border bg-white p-6 rounded-xl shadow-md h-full `}
    >
      <div className="flex justify-center md:justify-normal">
        <Image
          src={`${gambar}`}
          alt={`Image ${index + 1}`}
          className="size-32 md:size-36 object-scale-up p-3"
          width={200}
          height={200}
          style={{ width: "200", height: "200", objectFit: "contain" }}
        />
      </div>
      <p className="text-md font-medium mt-2 mb-2 lg:text-xl">{bidangbisnis}</p>
      <p className="text-sm font-light  leading-6">{penjelas}</p>
    </div>
  );
};

export default ItemFeature;
