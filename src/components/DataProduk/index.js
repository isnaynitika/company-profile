import React from "react";
import VisibleComponent from "./Visible/visible";
import Image from "next/image";
import Link from "next/link";

const ItemProduk = ({ gambarproduk, nama, deskripsi, linkproduk, index }) => {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const { ref, isVisible } = VisibleComponent();
  return (
    <div
      ref={ref}
      className={`grid grid-col-1 md:grid-cols-2 md:flex md:px-[5%] lg:px-[12%] md:flex-row md:gap-10 items-center mb-4 place-items-center px-4  ${
        isVisible
          ? `animate-fade-up animate-once animate-duration-500 animate-delay-0 animate-ease-in`
          : "opacity-0"
      }`}
    >
      <Image
        src={gambarproduk}
        alt={`Image ${index + 1}`}
        width={500}
        height={500}
        className="size-52 sm:size-60 md:size-72 lg:size-80 object-scale-down rounded-2xl"
        style={{ objectPosition: "start", width: "300", height: "300" }}
      />

      <div className="p-4 text-start">
        <h2 className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-gray-800 font-medium  md:text-3xl md:font-semibold">
          {nama}
        </h2>
        <p className="text-sm text-gray-600 mt-3 md:mt-8 md:text-lg md:font-light text-justify">
          {deskripsi}
        </p>
        <div className="py-2 mt-3">
          <a
            href={linkproduk ? `${linkproduk}` : "#"}
            target="_blank"
            className={linkproduk ? `${linkproduk}` : "pointer-events-none"}
          >
            <button className="inline-flex justify-center items-center p-2 px-3 text-base font text-center text-white rounded-lg bg-red-500 hover:bg-red-800 font-light">
              {linkproduk ? "Lihat Produk" : "Link Tidak Tersedia"}
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ItemProduk;
