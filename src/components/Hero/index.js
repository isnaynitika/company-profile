// components/Item.js
import React from "react";
import VisibleComponent from "../Visible";
import Link from "next/link";

const HeroSection = ({ gambar, perusahaan, deskripsi, kalimat }) => {
  const imageurl = process.env.NEXT_PUBLIC_IMG_URL;
  const { ref, isVisible } = VisibleComponent();

  function scroll() {
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  }

  return (
    <div
      ref={ref}
      className={`${
        isVisible
          ? "animate-fade-up animate-once animate-duration-[800ms] animate-delay-0 animate-ease-in"
          : "opacity-0"
      } relative rounded-3xl overflow-hidden mt-4 md:mx-10 mx-10`}
    >
      <section
        style={{ backgroundImage: `url(${gambar})` }}
        className="bg-cover bg-center bg-gray-500 bg-blend-multiply max-h-screen"
      >
        <div className="px-4 mx-auto max-w-screen-xl text-center py-16 lg:py-20">
          <a
            href="#"
            className="inline-flex justify-center mb-10 hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
          >
            {perusahaan}
          </a>
          <h1 className="mb-4 text-3xl font-semibold tracking-tight leading-none text-white md:text-5xl lg:text-6xl lg:px-20">
            {kalimat}
          </h1>
          <p className="mb-8 text-md font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            {deskripsi}
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <Link href="/hubungi-kami">
              <button className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-full bg-red-500 hover:bg-white hover:text-red-500">
                Mulai Konsultasi
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
            </Link>

            <button
              onClick={() => scroll()}
              className="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-full border border-white hover:bg-gray-100 hover:text-red-500"
            >
              Selengkapnya
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
